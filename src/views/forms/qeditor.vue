<template>
<!-- quill 简 -->
  <div id="quill-1">
    <quill-editor
      v-model:value="state.content"
      :options="state.editorOption"
      :disabled="state.disabled"
    />
  </div>

  <a-textarea v-model:value="state.content" auto-size />
</template>

<script >
import { reactive } from "vue";
import { Quill, quillEditor } from "@/components/QuillEditor/index";

// 加入yarn add quill-html-edit-button 测试源码编辑
import htmlEditButton from "quill-html-edit-button";
Quill.register({
  "modules/htmlEditButton": htmlEditButton,
});

export default {
  name: "AppQuill",
  components: {
    quillEditor,
  },
  setup() {
    const state = reactive({
      curTheme: "snow",
      showEditor: true,
      content: "<p>23\n33</p>\n<pre>const a = 1;</pre>",
      disabled: false,
      editorOption: {
        modules: {
          // toolbars: [
          // custom toolbars options
          // will override the default configuration
          // ],
          // other moudle options here
          // otherMoudle: {}
          htmlEditButton: {},
        },
        // more options
      },
    });
    return {
      state,
    };
  },
};
</script>

<style>
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

/* link打开时出现遮罩 */
.ql-snow .ql-tooltip {
  left: 0 !important;
  z-index: 200;
}

/* html中显示\n为换行符 */
.quill-1 {
  white-space: pre-line;
}
</style>