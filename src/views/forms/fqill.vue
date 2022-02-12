<template>
  <div id="app">
    <a-input-number
      id="inputNumber"
      v-model:value="numbervalue"
      :min="1"
      :max="10000"
      :step="1"
      @change="showTitle"
    />
    标题 {{ title }}
    <a-button type="primary"> Edit </a-button>
    <QuillEditor :content="content"></QuillEditor>
  </div>
</template>

<script >
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { QuillEditor } from "@/components/index";
import { ref } from "vue";
import fetch from "@/utils/api";

export default {
  components: {
    QuillEditor,
  },
  setup() {
    const content = ref("This is an Example!......");
    const numbervalue = ref(1);
    const title = ref("");
    const showTitle = () => {
      fetch.get("topic/f/" + numbervalue.value).then((di) => {
        title.value = di.Title;
        content.value = di.Content;
        // console.log(val)
        // console.log(di.Content)
      });
    };
    return {
      content,
      numbervalue,
      title,
      showTitle,
    };
  },
};
</script>

<style scoped>
</style>