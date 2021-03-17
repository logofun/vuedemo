const path = require('path')
const fs = require('fs')
const readline = require('readline')
const { deleteAll } = require('./filesCopy')

const args = process.argv.splice(2)
let dir = args[0]

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

if (!dir) {
  rl.question(`请输入需要删除的试图目录名： `, (name) => {
    del(name)
  })
} else {
  del(dir)
}

function del(name) {
  const viewTarget = path.join(__dirname, `../src/views/${name}`)
  const routerTarget = path.join(__dirname, `../src/router/modules/${name}.js`)
  deleteAll(viewTarget)
  fs.unlinkSync(routerTarget)
  rl.close()
  console.log('success!')
}

