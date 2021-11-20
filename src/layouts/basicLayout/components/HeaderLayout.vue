<template>
  <a-layout-header class="header-layout">
    <menu-unfold-outlined v-if="collapsed" class="trigger" @click="setCollapsedStatus(false)"/>
    <menu-fold-outlined v-else class="trigger" @click="setCollapsedStatus(true)"/>
    <div class="header-layout-right">
      <a-dropdown class="user-info">
        <div>
          <img src="../../../assets/images/default-head.png" alt="" />
          <span>{{ userInfo.userInfo && userInfo.userInfo.username }}</span>
        </div>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a @click="logout">退出登录</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </a-layout-header>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore();
const setCollapsedStatus = (data) => {
  store.commit('basicLayout/SET_COLLAPSED_STATUS', data)
}

const userInfo = computed(() => store.state.userInfo)
const collapsed = computed(() => store.state.basicLayout.collapsed)

const logout = async () => {
  await store.dispatch('logout', {
    msg: '退出成功，即将跳转登录页...',
    time: 2
  })
}
</script>

<style lang="less" scoped>
.header-layout {
  height: 48px;
  padding: 0;
  line-height: 48px;
  background: #fff;
  border-bottom: #dedede solid 1px;

  .trigger {
    padding: 0 24px;
    font-size: 18px;
    line-height: 60px;
    cursor: pointer;
    transform: translateY(-2px);
    transition: color 0.3s;

    &:hover {
      color: #1890ff;
    }
  }

  .header-layout-right {
    float: right;
    padding-right: 20px;

    .user-info {
      img {
        width: 24px;
        height: 24px;
        margin-right: 5px;
      }
    }
  }
}
</style>
