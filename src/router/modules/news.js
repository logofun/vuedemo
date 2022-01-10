export default {
  orderNo: 3,
  path: '',
  name: 'news',
  component: () => import('@/layouts/basicLayout/index.vue'),
  hideChildrenInMenu: true,
  meta: {
    icon: 'HomeOutlined',
    title: '新闻',
  },
  redirect: '/news',
  children: [
    {
      path: '/news',
      name: 'news',
      component: () => import('@/views/news/index.vue'),
      meta: {
          // title: '用户列表',
      }
    }
  ]
}
