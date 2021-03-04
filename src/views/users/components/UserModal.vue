<template>
  <div>
    <a-modal v-model:visible="visible" :title="title" @ok="onOk" forceRender>
      <form-panel ref="formPanel" :render-form="userModalColumns" :rules="userModalRules" :is-show-save-btn="false" />
    </a-modal>
  </div>
</template>
<script>
import { defineComponent, ref, reactive, watch } from 'vue';
import FormPanel from '@/components/FormPanel/index.vue'

const userModalColumns = {
  name: {
    type: 'input',
    label: '用户名',
    props: {
      placeholder: '请输入用户名'
    }
  },
  email: {
    type: 'input',
    label: '邮箱',
    props: {
      placeholder: '请输入邮箱'
    }
  }
}

const userModalRules = {
  name: [
    {
      required: true,
      message: '请输入用户名',
    },
  ],
  email: [
    {
      required: true,
      message: '请输入邮箱',
    },
  ]
}

export default defineComponent({
  components: {
    FormPanel
  },
  setup(props, { emit }) {
    const visible = ref(false)
    const title = ref('新增')
    const formPanel = ref()
    const currId = ref('')
    /**
     * 显示弹层并回显表单值
     */
    const showModal = (status, data = {}) => {
      visible.value = status
      data.topTitle && (title.value = data.topTitle)
      if (data.data) {
        currId.value = data.data['id']
        Object.keys(data.data).forEach(key => {
          formPanel.value.setFieldValue(key, data.data[key])
        })
      } else {
        currId.value = ''
      }
    }

    /**
     * 点击提交触发表单验证
     */
    const onOk = async () => {
      try {
        const data = await formPanel.value.validate()
        emit('ok', {
          ...data,
          id: currId.value
        })
      } catch (e) {}
    }

    /**
     * 如果弹层隐藏就重置表单
     */
    watch(visible, newValue => {
      if (!newValue) {
        formPanel.value.resetFields()
      }
    })

    return {
      userModalColumns,
      userModalRules,
      visible,
      title,
      formPanel,
      showModal,
      onOk
    };
  },
});
</script>
