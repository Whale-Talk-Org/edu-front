import request from '../utils/request';

/**
 * Hello 服务相关接口
 */

/**
 * 测试接口
 * @param data 请求数据
 */
export function sayHello(data: {
  name: string;
}) {
  return request({
    url: '/api/v1/hello',
    method: 'post',
    data,
  });
} 