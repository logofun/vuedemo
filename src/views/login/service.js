import fetch from '@/utils/fetch';

export const userLogin = params => fetch.post('api/user/login', params)