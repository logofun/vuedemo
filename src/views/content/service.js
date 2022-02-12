import fetch from "@/utils/api";

/**
 * 定义接口
 * @param params
 * @return {*}
 */

export const aacList = (params) => fetch.get("topic/r/Title", params);
