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
    标题：{{ title }}
    <a-button
      type="primary"
      icon=""
      :loading="iconLoading"
      @click="enterLoading"
    >
      Edit
    </a-button>
    <editor
      api-key="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
      :init="{
        height: 500,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount',
        ],
        toolbar1:'fullscreen undo redo | formatselect fontselect fontsizeselect | cut copy paste pastetext |',
        toolbar2:' forecolor backcolor bold italic underline strikethrough link anchor |blockquote subscript superscript removeformat | alignleft aligncenter alignright alignjustify outdent indent | bullist numlist',
        toolbar3:'table image axupimgs media emoticons charmap hr pagebreak insertdatetime  selectall visualblocks searchreplace | code print preview | indent2em lineheight formatpainter',
      }"
      initial-value="hahaha"
      v-model="content"
    />
  </div>
  <a-alert :message="infoText" type="info" />
</template>

 <script>
import Editor from "@tinymce/tinymce-vue";
import { ref } from "vue";
import fetch from "@/utils/api";

export default {
  name: "tinymce11",
  components: {
    editor: Editor,
  },

  setup() {
    const content = ref("");
    const infoText = ref('advlist autolink lists link image charmap print preview anchor' );
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
      infoText,
      numbervalue,
      title,
      showTitle,
    };
  },
};
</script>

<style>
/* 隐藏apikey没有绑定这个域名的提示 */
.tox-notifications-container .tox-notification--warning {
  display: none !important;
}
.tox.tox-tinymce {
  max-width: 100%;
}
</style>
