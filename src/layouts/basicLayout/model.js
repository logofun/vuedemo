import { collapsed, getLocalStorage, setLocalStorage } from '@/utils/storage'

const state = {
  collapsed: getLocalStorage(collapsed)
}

const mutations = {
  SET_COLLAPSED_STATUS: (state, data) => {
    state.collapsed = data
    setLocalStorage(collapsed, state.collapsed)
  }
}

const actions = {}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters,
}
