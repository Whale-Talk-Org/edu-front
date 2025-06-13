import request from '@/utils/request';


/**
 * 考试服务相关接口
 */

/**
 * 获取考试列表
 * @param params 查询参数
 */
export function listExams(params: {
  pageSize?: number;
  pageNumber?: number;
  status?: 'EXAM_STATUS_UNSPECIFIED' | 'EXAM_STATUS_UPCOMING' | 'EXAM_STATUS_ONGOING' | 'EXAM_STATUS_FINISHED' | 'EXAM_STATUS_ARCHIVED';
  classId?: string;
}) {
  return request({
    url: '/api/v1/exams',
    method: 'get',
    params,
  });
}

/**
 * 创建考试
 * @param data 考试信息
 */
export function createExam(data: {
  name: string;
  description: string;
  examDate: string;
  subjects: Array<{
    name: string;
    fullScore: number;
    passScore: number;
  }>;
  classIds: string[];
}) {
  return request({
    url: '/api/v1/exams',
    method: 'post',
    data,
  });
}

/**
 * 获取考试详情
 * @param examId 考试ID
 */
export function getExam(examId: string) {
  return request({
    url: `/api/v1/exams/${examId}`,
    method: 'get',
  });
}

/**
 * 更新考试信息
 * @param examId 考试ID
 * @param data 考试信息
 */
export function updateExam(examId: string, data: {
  name?: string;
  description?: string;
  examDate?: string;
  subjects?: Array<{
    name: string;
    fullScore: number;
    passScore: number;
  }>;
  classIds?: string[];
  status?: 'EXAM_STATUS_UNSPECIFIED' | 'EXAM_STATUS_UPCOMING' | 'EXAM_STATUS_ONGOING' | 'EXAM_STATUS_FINISHED' | 'EXAM_STATUS_ARCHIVED';
}) {
  return request({
    url: `/api/v1/exams/${examId}`,
    method: 'put',
    data,
  });
}

/**
 * 删除考试
 * @param examId 考试ID
 */
export function deleteExam(examId: string) {
  return request({
    url: `/api/v1/exams/${examId}`,
    method: 'delete',
  });
}

/**
 * 获取考试成绩列表
 * @param examId 考试ID
 * @param params 查询参数
 */
export function listExamScores(examId: string, params: {
  classId?: string;
  pageSize?: number;
  pageNumber?: number;
}) {
  return request({
    url: `/api/v1/exams/${examId}/scores`,
    method: 'get',
    params,
  });
}

/**
 * 获取班级考试统计数据
 * @param examId 考试ID
 * @param classId 班级ID
 */
export function getClassExamStats(examId: string, classId: string) {
  return request({
    url: `/api/v1/exams/${examId}/classes/${classId}/stats`,
    method: 'get',
  });
}

/**
 * 获取学生在某次考试的详细成绩
 * @param examId 考试ID
 * @param studentId 学生ID
 */
export function getStudentExamScore(examId: string, studentId: string) {
  return request({
    url: `/api/v1/exams/${examId}/students/${studentId}/score`,
    method: 'get',
  });
}

/**
 * 录入/更新学生成绩
 * @param examId 考试ID
 * @param studentId 学生ID
 * @param data 成绩信息
 */
export function updateStudentScore(examId: string, studentId: string, data: {
  subjectScores: Array<{
    subjectName: string;
    score: number;
  }>;
}) {
  return request({
    url: `/api/v1/exams/${examId}/students/${studentId}/score`,
    method: 'put',
    data,
  });
}

/**
 * 获取学生的考试历史
 * @param studentId 学生ID
 * @param params 查询参数
 */
export function getStudentExamHistory(studentId: string, params: {
  pageSize?: number;
  pageNumber?: number;
}) {
  return request({
    url: `/api/v1/students/${studentId}/exam-history`,
    method: 'get',
    params,
  });
}