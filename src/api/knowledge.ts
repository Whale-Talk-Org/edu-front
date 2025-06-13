import request from '@/utils/request';

/**
 * 知识点服务相关接口
 */

/**
 * 匹配题目知识点
 * @param data 题目信息
 */
export function matchQuestion(data: {
  mergedText: string;
  answer: string;
}) {
  return request({
    url: '/api/v1/match',
    method: 'post',
    data,
  });
} 