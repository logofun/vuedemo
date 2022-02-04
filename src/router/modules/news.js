export default {
  orderNo: 3,
  path: "",
  name: "news",
  component: () => import("@/layouts/basicLayout/index.vue"),
  // hideChildrenInMenu: true,
  meta: {
    icon: "HomeOutlined",
    title: "新闻",
  },
  // redirect: '/news',
  children: [
    {
      path: "/news1",
      name: "news1",
      component: () => import("@/views/news/index.vue"),
      meta: {
        title: "信息列表",
      },
    },
    {
      path: "/news2",
      name: "news2",
      component: () => import("@/views/news/detail.vue"),
      meta: {
        title: "信息内容",
      },
    },
    {
      path: "/news3",
      name: "news3",
      component: () => import("@/views/news/titlelist.vue"),
      meta: {
        title: "标题列表",
      },
    },
  ],
};
