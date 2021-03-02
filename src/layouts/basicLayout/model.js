import { collapsed, getLocalStorage, setLocalStorage } from '@/utils/storage'

const state = {
  collapsed: getLocalStorage(collapsed)
}

const mutations = {
  SET_COLLAPSED_STATUS: state => {
    state.collapsed = !state.collapsed
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
