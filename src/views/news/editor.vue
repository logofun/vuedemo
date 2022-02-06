<template>
  <quill-editor theme="snow" v-model:content="val" toolbar="essential">
    
  </quill-editor>
</template>

<script lang="ts">
// @ is an alias to /src
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "quill",
  components: {
    QuillEditor,
  },
  setup() {
    const val = ref(
      '<p>来源于&nbsp;></p>'
    );
    return {
      val,
    };
  },
});
</script>

<style>
</style>