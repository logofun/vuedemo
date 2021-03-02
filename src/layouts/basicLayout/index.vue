<template>
  <a-layout class="components-layout-base" style="min-height: 100vh;">
    <sliderLayout/>
    <a-layout class="right-layout_height">
      <headerLayout/>
      <breadcrumbLayout/>
      <a-layout-content class="layout-content">
        <div style="background: #fff" class="margin-bottom">
          <router-view/>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { defineComponent } from 'vue'
import sliderLayout from './components/SliderLayout.vue'
import headerLayout from './components/HeaderLayout.vue'
import breadcrumbLayout from './components/BreadcrumbLayout.vue'

export default defineComponent({
  components: {
    sliderLayout,
    headerLayout,
    breadcrumbLayout,
  },
})
</script>

<style lang="less">
@import '@/assets/less/var.less';

.components-layout-base {
  .layout-content {
    min-height: 280px;
    margin: @margin @margin @margin @margin;
    background: #fff;
  }

  .right-layout_height {
    max-height: 100vh;
    overflow-y: auto;
  }
}
</style>
