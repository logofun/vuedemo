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
      path: "/ctable",
      name: "ctable",
      component: () => import("@/views/content/ctable.vue"),
      meta: {
        title: "简单表格",
      },
    },
    {
      path: "/clist",
      name: "clist",
      component: () => import("@/views/content/clist.vue"),
      meta: {
        title: "简单列表",
      },
    },
    {
      path: "/richtext",
      name: "richtext",
      component: () => import("@/views/content/richtext.vue"),
      meta: {
        title: "富文本@Tinymce",
      },
    },  
    {
      path: "/rtext",
      name: "rtext",
      component: () => import("@/views/content/rtext.vue"),
      meta: {
        title: "Tinymce封装-简",
      },
    },    

  ],
};
