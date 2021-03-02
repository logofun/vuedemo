<template>
  <div class="breadcrumb-layout">
    <a-breadcrumb>
      <a-breadcrumb-item v-for="(item, index) in list">{{ item.meta.title }}</a-breadcrumb-item>
    </a-breadcrumb>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    const list = computed(() => router.currentRoute.value.matched)

    return {
      list
    }
  }
})
</script>

<style lang="less" scoped>
.breadcrumb-layout {
  padding: 16px 0 16px 16px;
  background: #fff;

  h1 {
    padding-top: 5px;
    font-size: 20px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.85);
  }
}
</style>
