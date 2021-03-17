const path = require('path')
const fs = require('fs')
const readline = require('readline')
const { copy } = require('./filesCopy')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const args = process.argv.splice(2)
let dir = args[0]

if (!dir) {
  rl.question(`请输入需要创建的试图目录名： `, (name) => {
    action(name)
  })
} else {
  action(dir)
}

function action(dir) {

  const copyTarget = path.join(__dirname, `../src/views/${dir}`)

  if (!fs.existsSync(copyTarget)) {
    copy(path.join(__dirname, './template/view'), copyTarget)
  } else {
    console.log('视图文件已经目录已存在，如果确定要重新生成文件请先移除 路径为：', copyTarget)
    return
  }

  const scoreDir = path.join(__dirname, './template/router/index.js')

  const template = fs.readFileSync(scoreDir, 'utf8')
  let content = template.replace(/\$1/g, dir);

  const targetFile = path.join(__dirname, `../src/router/modules/${dir}.js`)

  if (!fs.existsSync(path.join(__dirname, '../src/router/modules'))) {
    fs.mkdirSync(path.join(__dirname, '../src/router/modules'))
  }

  if (!fs.existsSync(targetFile)) {
    fs.writeFile(targetFile, content, (err) => {
      if (err) throw err;
      console.log(`创建成功，路由文件：${targetFile}`)
    })
  } else {
    console.log('路由文件已经存在，如果确定要重新生成路由文件请先移除 路径为：', targetFile)
  }

  rl.close()
}
