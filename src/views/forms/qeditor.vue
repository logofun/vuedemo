<template>
  <QuillEditor :content="content"></QuillEditor>
</template>

<script >
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { QuillEditor } from "@/components/index";
import { ref } from "vue";

export default {
  components: {
    QuillEditor,
  },
  setup() {
    const content = ref("This is an Example!......");
    return {
      content,
    };
  },
};
</script>

<style scoped>
</style>