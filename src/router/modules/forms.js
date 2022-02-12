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
  
  children: [

    {
      path: "/ftable",
      name: "ftable",
      component: () => import("@/views/forms/ftable.vue"),
      meta: {
        title: "简单表格",
      },
    },
    {
      path: "/flist",
      name: "flist",
      component: () => import("@/views/forms/flist.vue"),
      meta: {
        title: "标题列表",
      },
    },
    {
      path: "/qeditor",
      name: "qeditor",
      component: () => import("@/views/forms/fqill.vue"),
      meta: {
        title: "Quill",
      },
    },
    {
      path: "/myeditor",
      name: "myeditor",
      component: () => import("@/views/forms/qeditor.vue"),
      meta: {
        title: "Quill封装-简",
      },
    },

  ],
};
