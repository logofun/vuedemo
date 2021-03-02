<template>
  <div>
    <search-panel v-model:value="formData" :render-form="renderForm" @search="onSearch">
      <a-button @click="setUserModalVisible('新增')">新增</a-button>
    </search-panel>
    <table-panel ref="refTablePanel" :columns="columns" request="users">
      <template #update_time="{ text }">{{ filterTime(text) }}</template>
      <template #action="{ record }">
          <span>
            <router-link :to="{name: 'usersInfo', query: {id: record.id}}">查看</router-link>
            <a-divider type="vertical" />
            <a @click="setUserModalVisible('修改', record)">修改</a>
            <a-divider type="vertical" />
            <a @click="onDelete(record)">删除</a>
          </span>
      </template>
    </table-panel>
    <user-modal ref="userModal" render-form="userModalColumns" @ok="onOk"/>
  </div>
</template>
<script>
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import {defineComponent, ref, reactive, watch, createVNode} from 'vue';
import moment from 'moment'
import SearchPanel from '@/components/SearchPanel/index.vue'
import TablePanel from '@/components/TablePanel/index.vue'
import UserModal from '@/view/users/components/UserModal.vue';
import {addUser, updateUser, delUser} from '@/view/users/service';
import {message, Modal} from 'ant-design-vue'

const columns = [
  {
    title: '用户名',
    dataIndex: 'name',
    sorter: true,
    width: '20%'
  },
  {
    title: '邮箱',
    dataIndex: 'email',
  },
  {
    title: '更新时间',
    dataIndex: 'update_time',
    slots: {
      customRender: 'update_time',
    }
  },
  {
    title: '创建时间',
    dataIndex: 'create_time',
  },
  {
    title: '操作',
    key: 'action',
    slots: {
      customRender: 'action',
    }
  }
];

const renderForm = {
  status: {
    label: '任务状态',
    type: 'select',
    props: {
      allowClear: true,
      placeholder: '请选择任务状态',
      options: [
        {label: '未开始', value: 0},
        {label: '进行中', value: 1},
        {label: '已结束', value: 2}
      ]
    },
  },
  is_success: {
    label: '成功状态',
    type: 'select',
    props: {
      allowClear: true,
      placeholder: '请选择成功状态',
      options: [
        {label: '成功', value: 1},
        {label: '失败', value: 0}
      ]
    },
  },
  product_code: {
    label: '产品',
    type: 'select',
    props: {
      allowClear: true,
      placeholder: '请选择产品',
      options: [
        {label: '零食类', value: 1},
        {label: '生鲜类', value: 0}
      ]
    },
  },
  task_no: {
    label: '任务编号',
    type: 'input',
    props: {
      allowClear: true,
      placeholder: '请输入任务编号',
    },
  },
  template_code: {
    label: '日期',
    type: 'datePicker',
    props: {
      allowClear: true,
      placeholder: '请选择日期',
    },
  },
  time: {
    label: '日期范围',
    type: 'rangePicker',
    props: {
      allowClear: true,
      placeholder: ['开始日期', '结束日期'],
    },
  }
}

export default defineComponent({
  components: {
    SearchPanel,
    TablePanel,
    UserModal
  },
  setup() {
    const refTablePanel = ref()
    const userModal = ref()
    let formData = reactive({})
    /**
     * 显示UserModal组件
     */
    const setUserModalVisible = (topTitle, data) => {
      userModal.value.showModal(true, { topTitle, data })
    }

    /**
     * 提交新增/修改用户
     */
    const onOk = async (data) => {
      if (data.id) {
        await updateUser({
          id: data.id,
          name: data.name,
          email: data.email
        })
        message.success('更新成功')
      } else {
        await addUser(data)
        message.success('创建成功')
      }
      userModal.value.showModal(false)
      refTablePanel.value.run({ page: 1 })
    }

    const onDelete = (data) => {
      Modal.confirm({
        title: '提示',
        icon: createVNode(ExclamationCircleOutlined),
        content: `您确定要删除用户【${data.name}】吗?`,
        cancelText: '取消',
        okText: '确定',
        onOk: async () => {
          await delUser({id: data.id})
          message.success('删除成功')
          refTablePanel.value.run()
        },
      })
    }

    /**
     * 点击搜索 请求table列表数据接口
     */
    const onSearch = (data) => {
      refTablePanel.value.run({
        ...data,
        page: 1
      })
    }

    /**
     * 处理时间显示 vue3已经移除filters
     */
    const filterTime = (time) => {
      return moment(time).format('YYYY-MM-DD HH:mm:ss')
    }

    /**
     * 监听筛选表单数据变化
     */
    watch(formData, (newValue) => {
      console.log(`筛选表单数据发生了变化`, newValue);
    })

    return {
      columns,
      renderForm,
      formData,
      refTablePanel,
      userModal,
      onSearch,
      filterTime,
      setUserModalVisible,
      onOk,
      onDelete
    };
  },
});
</script>
