import fetch from '@/utils/fetch';

export const addUser = params => fetch.post('users', params)

export const updateUser = params => fetch.put(`users/${params.id}`, params.data)

export const delUser = params => fetch.del(`users/${params.id}`, params.data)
