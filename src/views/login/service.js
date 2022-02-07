// import fetch from '@/utils/fetch';
import fetch from '@/utils/api';

// export const userLogin = params => fetch.post('api/testUser/login', params)
export const userLogin = params => fetch.post('/login', params)