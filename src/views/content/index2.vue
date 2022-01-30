<template>
  <div class="padding">{{ hh }}</div>
  <a-table :dataSource="dataSource" :columns="columns" />
</template>

<script>
import { onMounted, ref, reactive } from "vue";
import { defineComponent } from "vue";
import axios from "axios";
import { aaList } from "./service";

export default defineComponent({
  setup() {
    const hh = ref("hahahaha");

    const dataSource = reactive([]);
    const columns = [
      {
        title: "Id",
        dataIndex: "id",
        key: "name",
      },
      {
        title: "role_name",
        dataIndex: "role_name",
        key: "age",
      },
      { title: "role_desc", dataIndex: "role_desc", key: "address" },
      { title: "status", dataIndex: "status", key: "status" },
      { title: "authority", dataIndex: "authority", key: "authority" },
    ];

    onMounted(() => {
      console.log("Component is mounted!");
      hh.value = "new name";
      // axios
      //   .get("http://localhost:3000/json/list.json")
      //   .then((response) => {
      //     dataSource.push(...response.data.data);
      //     dataSource.push(...response.data.data);
      //     console.log(dataSource);
      //     console.log(response.data.data);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      aaList().then((res) => {
        console.log(res);
        dataSource.push(...res.data);
      });
      // console.log(da);
      // dataSource.push(aaList().data)
    });

    return {
      hh,
      dataSource,
      columns,
    };
  },
});
</script>

<style scoped></style>
