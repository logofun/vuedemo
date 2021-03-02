import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router'
import { setupStore } from './store'
import { setAntIcons } from './logics/ant-icons'
import { setupAntd } from './logics/ant'

const app = createApp(App)
app.config.productionTip = false

// 配置路由
setupRouter(app)

// 配置vuex store
setupStore(app)

// 引入antd
setupAntd(app)

// 导入所有icon图标
setAntIcons(app)

// 路由准备完成后挂载
router.isReady().then(() => {
  app.mount('#app')
})
