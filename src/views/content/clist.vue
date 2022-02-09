<template>
  <a-list item-layout="horizontal" :data-source="data" :pagination="pagination">
    <template #renderItem="{ item }">
      <a-list-item>
        <template #actions>
          <a>显示</a>
          <a-button type="primary" @click="showModal(item.ID)"
            >Open Modal</a-button
          >
          <!-- <a-modal
            v-model:visible="visible"
            title="Basic Modal"
            width="100%"
            wrap-class-name="full-modal"
            @ok="handleOk"
          >
            <p v-html="item.Content"></p>
          </a-modal> -->
        </template>
        <a-list-item-meta>
          <template #description>
            {{ item.UserName }}
          </template>
          <template #avatar>
            <a-avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </template>
          <template #title>
            <a href="https://www.antdv.com/">{{ item.Title }}</a>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>

  <a-modal
    v-model:visible="visible"
    :title="titlebyid"
    width="100%"
    wrap-class-name="full-modal"
    @ok="handleOk"
  >
    <p v-html="contentbyid"></p>
  </a-modal>
</template>
<script>
import { onMounted, ref, reactive } from "vue";
import { defineComponent } from "vue";
import { aacList } from "./service";
import fetch from '@/utils/api';
//
export default defineComponent({
  setup() {
    // get数据操作
    const data = reactive([]);
    onMounted(() => {
      console.log("INDEX3 Component is mounted!");

      aacList().then((res) => {
        // data.push(...res.data);
        data.push(...res);
        console.log(data);
      });
    });

    // 弹窗操作
    const visible = ref(false);
    const titlebyid = ref("");
    const contentbyid = ref("");
  
    const showModal = (n) => {
      visible.value = true;
      console.log(n)
      let curl = "topic/f/"+n;
      console.log(curl);
      fetch.get(curl).then((d)=>{
        titlebyid.value = d.Title;
        contentbyid.value = d.Content;
        // console.log(d);
      });
      
      
      // console.log(contentbyid.value);
      
    };

    const handleOk = (e) => {
      console.log(e);
      visible.value = false;
    };

    // 分页操作
    const pagination = {
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 10, //一页显示几个list信息
    };

    return {
      data,
      pagination,
      visible,
      showModal,
      handleOk,
      contentbyid,
      titlebyid,
    };
  },
});
</script>

<style scoped>
pre {
white-space: pre-wrap;
word-wrap: break-word;
}
</style>