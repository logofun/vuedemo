## 先安装 quill

npm install quill

## 直接使用了一段源码内容

https://github.com/flyween/vue3-quill
创建了一个 quilleditor 的组件
组件文件为 editor.vue

## 然后在 index.js 中可以看出自动注册了

import quillEditor from './editor.vue'
quillEditor.install = function(app) {
app.component(quillEditor.name, quillEditor)
}

## 使用组件时，可以引入两个 export default 项

import { Quill, quillEditor } from "@/components/QuillEditor/index";
其中 quillEditor 是组件 来源于 editor.vue 文件
Quill 则是原生 quill，用于插件使用的
本例中使用了 quill-html-edit-button 插件
