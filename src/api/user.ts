import request from '@/utils/request';

/**
 * 用户服务相关接口
 */

/**
 * 用户登录
 * @param data 登录信息
 */
export function login(data: {
  username: string;
  password: string;
  rememberDays?: number;
}) {
  return request({
    url: '/api/v1/auth/login',
    method: 'post',
    data,
  });
}

/**
 * 退出登录
 */
export function logout() {
  return request({
    url: '/api/v1/auth/logout',
    method: 'post',
  });
}

/**
 * 获取当前用户信息
 */
export function getCurrentUser() {
  return request({
    url: '/api/v1/users/current',
    method: 'get',
  });
}

/**
 * 更新用户信息
 * @param userId 用户ID
 * @param data 用户信息
 */
export function updateUser(userId: string, data: {
  name?: string;
  avatar?: string;
  email?: string;
  phone?: string;
}) {
  return request({
    url: `/api/v1/users/${userId}`,
    method: 'put',
    data,
  });
}

/**
 * 修改密码
 * @param data 密码信息
 */
export function changePassword(data: {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}) {
  return request({
    url: '/api/v1/users/change-password',
    method: 'post',
    data,
  });
}

/**
 * 重置密码
 * @param data 重置密码信息
 */
export function resetPassword(data: {
  userId: string;
}) {
  return request({
    url: '/api/v1/users/reset-password',
    method: 'post',
    data,
  });
} 