import fetch from '@/utils/quest';

/**
 * 定义接口
 * @param params
 * @return {*}
 */
export const xx = params => fetch.post('xx', params)

export const aaList = params => fetch.get('json/list.json', params)
export const aacList = params => fetch.get('json/contentlist.json', params)

// export const expressList = params => fetch.get('topic', params)
