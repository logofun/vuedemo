<template>
  <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item :label="item.label" v-bind="validateInfos[key]" v-for="(item, key) in renderForm">
      <template v-if="item.type === 'input'">
        <a-input v-model:value="modelRef[key]" v-bind="{...item.props}" />
      </template>
      <template v-if="item.type === 'select'">
        <a-select v-model:value="modelRef[key]" v-bind="{...item.props}" />
      </template>
      <template v-if="item.type === 'checkbox'">
        <a-checkbox-group v-model:value="modelRef[key]" v-bind="{...item.props}" />
      </template>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: wrapperCol.span, offset: labelCol.span }" v-if="isShowSaveBtn">
      <a-button type="primary" @click.prevent="onSubmit">提交</a-button>
      <a-button style="margin-left: 10px" @click="resetFields">重置</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { defineComponent, toRaw, watch } from 'vue';
import { useForm } from '@ant-design-vue/use';

export default defineComponent({
  props: {
    renderForm: {
      type: Object,
      default: () => ({})
    },
    value: {
      type: Object,
      default: () => ({})
    },
    rules: {
      type: Object,
      default: () => ({})
    },
    isShowSaveBtn: {
      type: Boolean,
      default: true,
    },
    labelCol: {
      type: Object,
      default: () => ({ span: 6 })
    },
    wrapperCol: {
      type: Object,
      default: () => ({ span: 14 })
    }
  },
  setup(props, { emit }) {
    const { value: modelRef, rules: rulesRef } = props
    const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef);

    const onSubmit = async () => {
      return new Promise((resolve, reject) => {
        validate().then(() => {
          resolve(toRaw(modelRef))
          emit('submit', toRaw(modelRef))
        }).catch(() => {
          reject(new Error('表单验证不通过'))
        });
      })
    };

    watch(modelRef, newValue => {
      emit('value', newValue)
    })

    return {
      validateInfos,
      validate,
      resetFields,
      modelRef,
      onSubmit
    };
  },
})
</script>
