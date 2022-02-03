export default {
  orderNo: 3,
  path: "",
  name: "content",
  component: () => import("@/layouts/basicLayout/index.vue"),
  // hideChildrenInMenu: true,
  meta: {
    icon: "BlockOutlined",
    title: "内容",
  },
  // redirect: "/content",
  children: [
    {
      path: "/content1",
      name: "content1",
      component: () => import("@/views/content/index.vue"),
      meta: {
        title: "登录页面",
      },
    },
    {
      path: "/content2",
      name: "content2",
      component: () => import("@/views/content/index2.vue"),
      meta: {
        title: "表格",
      },
    },
    {
      path: "/content3",
      name: "content3",
      component: () => import("@/views/content/index3.vue"),
      meta: {
        title: "列表",
      },
    },
    {
      path: "/content4",
      name: "content4",
      component: () => import("@/views/content/index4.vue"),
      meta: {
        title: "富文本",
      },
    },    

  ],
};
