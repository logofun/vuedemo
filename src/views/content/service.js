// import fetch from '@/utils/quest';
import fetch from '@/utils/api';

/**
 * 定义接口
 * @param params
 * @return {*}
 */

// export const aaList = params => fetch.get('json/list.json', params)
// export const aacList = params => fetch.get('json/contentlist.json', params)

// export const aaList = params => fetch.get('topic/f/:id', params)
export const aacList = params => fetch.get('topic/r/Title', params)
