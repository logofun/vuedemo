<template>
  <div style=" width: 600px;margin: 100px auto;">
    <h1 style="text-align: center">登录</h1>
    <form-panel ref="formPanel" :render-form="renderForm" :rules="rules" @submit="onLogin">
      <template #code>
        <a-row>
          <a-col :span="12">
            <a-input v-model:value="formData.code" placeholder="请输入验证码" />
          </a-col>
          <a-col :span="12">
            <div style="padding: 5px">
              <div id="v_container" style="height: 30px;"></div>
            </div>
          </a-col>
        </a-row>
      </template>
    </form-panel>
  </div>
</template>

<script>
import { defineComponent, reactive, watch, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';
import { message } from 'ant-design-vue'
import { useStore } from 'vuex'
import { FormPanel } from '@/components/index'
import { GVerify } from '@/plugins/index'
import { userLogin } from './service'

const renderForm = {
  username: {
    type: 'input',
    label: '用户名',
    props: {
      placeholder: '用户名：admin'
    }
  },
  password: {
    type: 'password',
    label: '密码',
    props: {
      placeholder: '密码: admin'
    }
  },
  code: {
    label: '验证码',
    scopedSlots: { customRender: 'code' }
  }
}

const rules = {
  name: [
    { required: true, message: '请输入用户名' }
  ],
  password: [
    { required: true, message: '请输入密码' }
  ],
  code: [
    { required: true, message: '请输入验证码' }
  ]
}

export default defineComponent({
  components: {
    FormPanel
  },
  setup() {
    const router = useRouter()
    const store = useStore()
    const formData = reactive({
      code: ''
    })
    const formPanel = ref()
    let verifyCode = null;

    const onLogin = async (params) => {
      if (!(verifyCode).validate(formData.code)) {
        message.error('验证码错误')
        return;
      }
      const { data } = await userLogin(params)
      await store.dispatch('login', data)
      message.success('登录成功')
      router.push('/')
    }

    /**
     * 设置FormPanel组件中code的值，保证验证能通过
     */
    watch(formData, newValue => {
      formPanel.value.setFieldValue('code', newValue.code)
    })

    onMounted(() => {
      verifyCode = new GVerify({
        id: 'v_container',
      });
    })

    return {
      renderForm,
      rules,
      formData,
      formPanel,
      onLogin,
    }
  }
})
</script>
