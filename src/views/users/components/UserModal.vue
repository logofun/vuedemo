<template>
  <div>
    <a-modal v-model:visible="visible" :title="title" @ok="onOk">
      <form-panel ref="formPanel" :render-form="userModalColumns" :rules="userModalRules" :is-show-save-btn="false" v-model:value="formData" />
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

export default defineComponent({
  components: {
    FormPanel
  },
  setup(props, { emit }) {
    const visible = ref(false)
    const title = ref('新增')
    const formPanel = ref()
    let formData = reactive({
      name: '',
      email: ''
    })

    const userModalRules = reactive({
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
    })

    /**
     * 显示弹层并回显表单值
     */
    const showModal = (status, data = {}) => {
      visible.value = status
      data.topTitle && (title.value = data.topTitle)
      if (data.data) {
        Object.keys(data.data).forEach(key => {
          formData[key] = data.data[key]
        })
      }
    }

    /**
     * 点击提交触发表单验证
     */
    const onOk = async () => {
      try {
        await formPanel.value.validate()
        emit('ok', formData)
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
      formData,
      showModal,
      onOk
    };
  },
});
</script>
