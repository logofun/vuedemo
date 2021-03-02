import BasicLayout from '@/layouts/basicLayout/index.vue';

export default {
  orderNo: 1,
  path: '/home',
  name: 'home',
  component: BasicLayout,
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
      component: () => import('@/view/home/welcome.vue'),
      meta: {}
    }
  ]
}
