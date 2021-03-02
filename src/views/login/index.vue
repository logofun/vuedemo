<template>
  <div>
    <a-button @click="onLogin">登录</a-button>
  </div>
</template>

<script setup>
import { message } from 'ant-design-vue'
import { useStore } from 'vuex'
import router from '@/router';
const store = useStore()

const onLogin = async () => {
  await store.dispatch('login')
  message.success('登录成功')
  router.push('/')
}
</script>
