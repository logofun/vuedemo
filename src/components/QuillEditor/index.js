import Quill from 'quill'
import quillEditor from './editor.vue'

// vue提供install可供我们开发新的插件及全局注册组件等
// install方法第一个参数是vue的构造器，第二个参数是可选的选项对象
// install(vue,option)
quillEditor.install = function(app) {
  app.component(quillEditor.name, quillEditor)
}

const VueQuillEditor = { Quill, quillEditor }
export default VueQuillEditor
export { Quill, quillEditor }