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
    title="Basic Modal"
    width="100%"
    wrap-class-name="full-modal"
    @ok="handleOk"
  >
    <p v-html="newnew"></p>
  </a-modal>
</template>
<script>
import { onMounted, ref, reactive } from "vue";
import { defineComponent } from "vue";
import { aacList } from "./service";
//
export default defineComponent({
  setup() {
    // get数据操作
    const data = reactive([]);
    onMounted(() => {
      console.log("INDEX3 Component is mounted!");

      aacList().then((res) => {
        data.push(...res.data);
        console.log(data);
      });
    });

    // 弹窗操作
    const visible = ref(false);
    const newnew = ref("");
  
    const showModal = (n) => {
      visible.value = true;
      console.log(n);
      // newnew.value="test a test";
      newnew.value = data[n - 1].Content;
      
      console.log(newnew.value);
      // n = n - 1;
      // newnew.value = data[n].Content.replace(/(\n\r|\r\n|\r|\n)/g,'<br/>');
      // newnew.value = strn;
      
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
      pageSize: 12, //一页显示几个list信息
    };

    return {
      data,
      pagination,
      visible,
      showModal,
      handleOk,
      newnew,
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