<template>
  <div id="app">
    <a-space>
      <a-input-number
        id="inputNumber"
        v-model:value="numbervalue"
        :min="1"
        :max="10000"
        :step="1"
        @change="showTitle"
      />
      标题 {{ title }}
      <a-button type="primary" @click="revise"> 修改\n为br </a-button>
    </a-space>
    <div>
      <quill-editor
        v-model:value="state.content"
        :options="state.editorOption"
        :disabled="state.disabled"
      />
    </div>
  </div>
  <a-alert :message="state.content" type="info" />
</template>

<script >
import { ref, reactive } from "vue";
import { quillEditor } from "@/components/QuillEditor/index";
import fetch from "@/utils/api";

export default {
  components: {
    quillEditor,
  },
  setup() {
    const numbervalue = ref(1);
    const title = ref("");
    const state = reactive({
      curTheme: "snow",
      showEditor: true,
      content: "This is an Example!......",
      // disabled: false,
    });
    const showTitle = () => {
      fetch.get("topic/f/" + numbervalue.value).then((di) => {
        title.value = di.Title;
        state.content = di.Content;
      });
    };
    const revise = () => {
      // console.log("button click");
      // let pattern = /\\n/g;
      // let str = state.content;
      // console.log('old:'+str);
      // console.log(pattern.test(str));
      // let nstr = str.replace(/\\n/g, "<br>");
      // console.log('new:'+nstr)
      let str = state.content;
      let nstr = str.replace(/\\n/g, "<br>");
      state.content = nstr;
    };
    return {
      state,
      numbervalue,
      title,
      showTitle,
      revise,
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
</style>