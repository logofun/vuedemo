const fs = require('fs'),
  stat = fs.stat;


// 在复制目录前需要判断该目录是否存在，不存在需要先创建目录
const copy = function (src, dst) {
  if (fs.existsSync(dst)) {
    _copy(src, dst)
  } else {
    fs.mkdir(dst, function () {
      _copy(src, dst)
    })
  }
};
/*
 * 复制目录中的所有文件包括子目录
 * @param{ String } 需要复制的目录
 * @param{ String } 复制到指定的目录
 */
const _copy = function (src, dst) {
  // 读取目录中的所有文件/目录
  fs.readdir(src, function (err, paths) {
    if (err) {
      throw err
    }
    paths.forEach(function (path) {
      let _src = src + '/' + path,
        _dst = dst + '/' + path,
        readable, writable;
      stat(_src, function (err, st) {
        if (err) {
          throw err
        }
        // 判断是否为文件
        if (st.isFile()) {
          // 创建读取流
          readable = fs.createReadStream(_src)
          // 创建写入流
          writable = fs.createWriteStream(_dst)
          // 通过管道来传输流
          readable.pipe(writable)
        }
        // 如果是目录则递归调用自身
        else if (st.isDirectory()) {
          copy(_src, _dst, _copy)
        }
      })
    })
  })
};

// 删除文件
function deleteAll(path) {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path)
    files.forEach(function (file, index) {
      const curPath = path + "/" + file;
      if (fs.statSync(curPath).isDirectory()) { // recurse
        deleteAll(curPath)
      } else { // delete file
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(path)
  }
}

module.exports = {
  deleteAll,
  copy
}
