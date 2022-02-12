<template>
  <richTextEditor
   
    placeHolder="Write a text"
    
  ></richTextEditor>
</template>

<script>


import { richTextEditor } from "vue3-quilljs";
import "vue3-quilljs/lib/style.css";

export default{
Components:{
  richTextEditor:richTextEditor,
  },

setup(){

return{

}
}

}
</script>

<style></style>
