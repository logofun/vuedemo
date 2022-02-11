import fetch from '@/utils/api';

export const userAdd = params => fetch.post('api/testUser/add', params)

export const userUpdate = params => fetch.post('api/testUser/update', params)

export const userDel = params => fetch.get('api/testUser/del', params)

export const sysRoleList = params => fetch.get('api/role/list', params)