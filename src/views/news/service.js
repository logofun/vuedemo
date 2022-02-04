import fetch from "@/utils/api";

/**
 * 定义接口
 * @param params
 * @return {*}
 */
export const xx = (params) => fetch.post("xx", params);

export const titlelist = (params) => fetch.get("topic/r/Title", params);
