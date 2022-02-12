
import fetch from '@/utils/api';

export const userLogin = params => fetch.post('/login', params)