export default {
  orderNo: 1,
  path: '',
  name: '_$1',
  component: () => import('@/layouts/basicLayout/index.vue'),
  hideChildrenInMenu: true,
  meta: {
    icon: 'HomeOutlined',
    title: '$1',
  },
  redirect: '/$1',
  children: [
    {
      path: '/$1',
      name: '$1',
      component: () => import('@/views/$1/index.vue'),
      meta: {}
    }
  ]
}
