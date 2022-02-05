<template>
  <quill-editor theme="snow"></quill-editor>
</template>

<script>
// @ is an alias to /src
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { ref } from "vue";
export default {
  components: {
    QuillEditor,
  },
  setup() {
    val = ref(
      '<p>来源于&nbsp;<a href=\\"https://www.cnblogs.com/huangyong8585/archive/2012/06/12/2546234.html\\">https://www.cnblogs.com/huangyong8585/archive/2012/06/12/2546234.html</a></p><p>代码如下</p><pre><code>function getTop(e)<br>{<br>    var offset=e.offsetTop;<br>    if(e.offsetParent!=null) //只要还有父元素,也就是当前元素不是根节点就继续往上累计元素的高度<br>        offset+=getTop(e.offsetParent);<br>    return offset;<br>}<br>var myBlockTop = getTop(document.getElementById(\\"homepageBanner\\"));<br>var oneDiv=document.getElementById(\\"homepageBanner\\");<br>if(!!window.attachEvent)//ie浏览器下。<br>{<br>    window.attachEvent(\\\'onscroll\\function(){<br>                    if(document.documentElement.scrollTop/* +  (document.body.clientHeight || window.innerHTML) */&gt;= myBlockTop)<br>                    {oneDiv.style.position=\\"fixed\\";oneDiv.style.top=\\"0\\";oneDiv.style.left=\\"50%\\";oneDiv.style.marginLeft=\\"-500px\\";}<br>                    else{oneDiv.removeAttribute(\\"style\\");}<br><br>    });<br>}<br>if(!!window.addEventListener)//非ie浏览器下<br>{<br>    window.addEventListener(\\"scroll\\",function(){//document.body.scrollTop可保证chrome的正常。<br>        if(document.documentElement.scrollTop/* +  (document.body.clientHeight || window.innerHTML) */&gt;= myBlockTop||document.body.scrollTop&gt;=myBlockTop)<br>        {oneDiv.style.position=\\"fixed\\";oneDiv.style.top=\\"0\\";oneDiv.style.left=\\"50%\\";oneDiv.style.marginLeft=\\"-500px\\";}<br>        else{oneDiv.style.position=\\"\\";oneDiv.style.top=\\"auto\\";oneDiv.style.left=\\"auto\\";oneDiv.style.marginLeft=\\"0\\";oneDiv.removeAttribute(\\"style\\");}<br>    });<br>}</code></pre><p><br></p>'
    );
  },
};
</script>

<style>
</style>