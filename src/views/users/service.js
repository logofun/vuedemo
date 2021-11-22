import fetch from '@/utils/fetch';

export const userAdd = params => fetch.post('api/user/add', params)

export const userUpdate = params => fetch.post('api/user/update', params)

export const userDel = params => fetch.get('api/user/del', params)

export const sysRoleList = params => fetch.get('api/role/list', params)