# my Template
借助别人的源码进行学习和改进
vite2+vue3+ant-design-vue3搭建的一个后台管理系统

## 简介

* 自己搭建了一个Express+Sqlite3的后台api
* 用于验证各种aixos数据传递
* 自己封装了Tinymce和Quill两个富文本组件

### 文件夹结构
```
├─ public                                   // 存放icon
├─ src                                      // 代码编写的目录
│  ├─ assets                                // 静态文件
│  │  ├─ less                               // 公共less
│  │  └─ images                             // 图片文件
│  ├─ components                            // 公共组件
│  │  ├─ Editor                             // 富文本组件
│  │  │	 └─ wangeditor.vue
│  │  │	 └─ quilleditor.vue
│  │  │	 └─ tinymceeditor.vue
│  │  ├─ FormPanel                          // 表单组件
│  │  │	 └─ index.vue
│  │  ├─ SearchPanel                        // 筛选组件
│  │  │	 └─ index.vue
│  │  ├─ TablePanel                         // 表格组件
│  │  │	 └─ index.vue
│  │  └─ index.js                           // 组件集合引用文件
│  ├─ plugins                               // 自定义插件
│  │  ├─ gVerify.js                         // 验证码插件
│  │  └─ index.js                           // 插件入口文件
│  ├─ views                                 // 页面文件
│  │  ├─ components                         // 页面公用组件
│  │  ├─ users                              // users模块为例目录
│  │  │  └─ components                      // users模块组件
│  │  │  └─ index.vue                       // 对应路由: /users
│  │  │  └─ list.vue                        // 对应路由: /users/list
│  │  │  └─ info.vue                        // 对应路由: /users/info
│  │  │  └─ model.js                        // users模块vuex数据
│  │  │  └─ service.vue                     // users模块相关定义的接口请求
│  ├─ router                                // 路由相关
│  │  ├─ modules
│  │  ├─ index.js                           // 路由定义入口
│  │  ├─ permission.js                      // 动态路由
│  │  └─ routes.js                          // 路由配置
│  ├─ store                                 // 存储全局vuex
│  │  ├─ modules
│  │  └─ index.js
│  ├─ App.vue                               // 页面入口文件
│  └─ main.js                               // 程序入口文件
├─ vite.config.js                           // vite配置文件
├─ .gitignore                               // git 忽略项
├─ README.md                                // README
└─ package.json                             // 配置依赖
```

我增加了
content 一套（路由，views,models,service）
forms   一套（路由，views,models,service）

## 快速使用

```
# 安装依赖(建议使用yarn)

npm install
or
yarn install

# 启动

npm run dev
or
yarn dev

# 编译

npm run build
or
yarn build

# 编译后预览

yarn build && yarn serve


