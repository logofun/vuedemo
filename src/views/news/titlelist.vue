<template>
  <a-table :columns="columns" :data-source="data"> </a-table>
</template>
<script>
import { titlelist } from "./service";
import { defineComponent, onMounted, reactive } from "vue";
const columns = [
  {
    title: "ID",
    dataIndex: "ID",
    key: "id",
    width: "20%",
  },
  {
    title: "Title",
    dataIndex: "Title",
    key: "title",
  },
];

// const data = [
//   { ID: 2, Title: "人类社会需要三六九等的划分吗？" },
//   { ID: 24, Title: "JS妙用（一） 动态增加信息并输出在html页面上" },
//   { ID: 25, Title: "JS妙用（二）进度条" },
//   { ID: 26, Title: "TP5.1 分页函数paginate" },
//   { ID: 27, Title: "TP5.1 分页类自定义" },
//   { ID: 28, Title: "mysql  修改表注释、字段注释、查看与修改注释" },
// ];

export default defineComponent({
  setup() {
    const data = reactive([]);
    onMounted(() => {
      titlelist().then((res) => {
        data.push(...res);
        console.log(data);
      });
    });
    return {
      data,
      columns,
    };
  },
});
</script>
