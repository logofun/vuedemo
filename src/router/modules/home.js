export default {
  orderNo: 1,
  path: '/home',
  name: 'home',
  component: () => import('@/layouts/basicLayout/index.vue'),
  hideChildrenInMenu: true,
  meta: {
    icon: 'HomeOutlined',
    title: '首页',
  },
  redirect: '/home/welcome',
  children: [
    {
      path: '/home/welcome',
      name: 'homeWelcome',
      component: () => import('@/views/home/welcome.vue'),
      meta: {}
    }
  ]
}
