export default {
  orderNo: 4,
  path: "",
  name: "forms",
  component: () => import("@/layouts/basicLayout/index.vue"),
  // hideChildrenInMenu: true,
  meta: {
    icon: "HomeOutlined",
    title: "组件",
  },
  // redirect: '/news',
  children: [

    {
      path: "/ftable",
      name: "ftable",
      component: () => import("@/views/news/ftable.vue"),
      meta: {
        title: "简单表格",
      },
    },
    {
      path: "/flist",
      name: "flist",
      component: () => import("@/views/news/flist.vue"),
      meta: {
        title: "标题列表",
      },
    },
    {
      path: "/editor2",
      name: "editor2",
      component: () => import("@/views/news/qeditor.vue"),
      meta: {
        title: "Quill2",
      },
    },
  ],
};
