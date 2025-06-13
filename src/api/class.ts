import request from '@/utils/request';

/**
 * 班级服务相关接口
 */

/**
 * 获取班级列表
 * @param params 查询参数
 */
export function listClasses(params: {
  pageSize?: number;
  pageNumber?: number;
}) {
  return request({
    url: '/api/v1/classes',
    method: 'get',
    params,
  });
}

/**
 * 创建班级
 * @param data 班级信息
 */
export function createClass(data: {
  name: string;
  students?: Array<{
    id: string;
    name: string;
    avatar?: string;
    basicInfo?: {
      gender?: string;
      age?: number;
      contact?: string;
    };
  }>;
}) {
  return request({
    url: '/api/v1/classes',
    method: 'post',
    data,
  });
}

/**
 * 获取班级详情
 * @param classId 班级ID
 */
export function getClass(classId: string) {
  return request({
    url: `/api/v1/classes/${classId}`,
    method: 'get',
  });
}

/**
 * 更新班级信息
 * @param classId 班级ID
 * @param data 班级信息
 */
export function updateClass(classId: string, data: {
  name?: string;
  students?: Array<{
    id: string;
    name: string;
    avatar?: string;
    basicInfo?: {
      gender?: string;
      age?: number;
      contact?: string;
    };
  }>;
}) {
  return request({
    url: `/api/v1/classes/${classId}`,
    method: 'put',
    data,
  });
}

/**
 * 删除班级
 * @param classId 班级ID
 */
export function deleteClass(classId: string) {
  return request({
    url: `/api/v1/classes/${classId}`,
    method: 'delete',
  });
}

/**
 * 获取班级内的学生列表
 * @param classId 班级ID
 * @param params 查询参数
 */
export function listClassStudents(classId: string, params: {
  pageSize?: number;
  pageNumber?: number;
}) {
  return request({
    url: `/api/v1/classes/${classId}/students`,
    method: 'get',
    params,
  });
} 