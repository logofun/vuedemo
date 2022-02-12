<template>
  <div>
    <quill-editor
      v-model:value="state.content"
      :options="state.editorOption"
      :disabled="state.disabled"
    />
  </div>

  <a-alert :message="state.content" type="info" />
</template>

<script >
import { reactive } from "vue";
import { quillEditor } from "@/components/QuillEditor/index";

export default {
  name: "AppQuill",
  components: {
    quillEditor,
  },
  setup() {
    const state = reactive({
      curTheme: "snow",
      showEditor: true,
      content: "<p>2333</p>",
      disabled: false,
    });
    return {
      state,
    };
  },
};
</script>

<style >
.tab-button-wrap {
  display: flex;
  justify-content: center;
  padding: 15px 0;
}
.tab-button-wrap button {
  padding: 15px 20px;
  border: 1px solid #efefef;
  background: #fff;
  -webkit-appearance: none;
  cursor: pointer;
}
.tab-button-wrap button.on,
.tab-button-wrap button:hover {
  background: #efefef;
}
.tab-button-wrap button:active,
.tab-button-wrap button:focus {
  border: none;
  outline: none;
}

.ql-snow .ql-tooltip  {
left: 0 !important;
z-index:200;
}
</style>