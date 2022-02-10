<template>
  <div class="home">
    <!-- <p class="tipx">
      组件版，将tinymce封装成一个组件来调用(位于/src/components/Tinymce.vue)
    </p> -->

    <a-input-number
      id="inputNumber"
      v-model:value="numbervalue"
      :min="1"
      :max="10000"
      :step=1
      @change ="showTitle"
    />
    Title：{{ title }}
    <a-button
      type="primary"
      icon=""
      :loading="iconLoading"
      @click="enterLoading"
    >
      Edit
    </a-button>
    <Tinymce v-model:value="val" />

    <button @click="isText = !isText" style="margin: 10px">html切换</button>
    <div v-if="isText">{{ val }}</div>
    <div v-else v-html="val"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Tinymce } from "@/components/index";
import { ref } from "vue";
import fetch from "@/utils/api";

export default {
  name: "Home",
  components: {
    Tinymce,
  },

  setup() {
    const val = ref('TinyMCE is coming......');
    const isText = ref(true);

    const numbervalue = ref(1);
    const title = ref('');
    const showTitle = ()=>{
      fetch.get("topic/f/"+numbervalue.value).then((di)=>{
        title.value = di.Title; 
        val.value = di.Content;
        // console.log(val)
        // console.log(di.Content)
      })
    }
    const iconLoading = ref(false);
    const enterLoading = () => {
      iconLoading.value = { delay: 1000 };
      // let curl = "topic/f/" + numbervalue.value;
      // console.log(curl);
      // fetch.get(curl).then((d) => {
      //   val.value = d.Content;
      // });
      setTimeout(() => {
        iconLoading.value = false;
      }, 2000);
    };

    return {
      val,
      isText,
      numbervalue,
      enterLoading,
      iconLoading,
      showTitle,
      title,
    };
  },
};
</script>