import request from '@/utils/request';

export interface ExamResult {
  examName: string;
  examDate: string;
  subjectScores: SubjectScore[];
  totalScore: number;
  classRank: number;
  gradeRank: number;
}

export interface SubjectScore {
  subject: string;
  score: number;
  classAverage: number;
  rank: number;
}

export interface ListStudentExamsResponse {
  examResults: ExamResult[];
  total: number;
}

export function listStudentExams(studentId: string, params: {
  pageSize?: number;
  pageNumber?: number;
}) {
  return request({
    url: `/api/v1/students/${studentId}/exams`,
    method: 'get',
    params,
  });
}

export interface StudentProfile {
  id: string;
  name: string;
  avatar?: string;
  profileHeader?: ProfileHeader;
  profileContent?: ProfileContent;
  metadata?: ProfileMetadata;
}

export interface ProfileHeader {
  studentName: string;
  studentId: string;
  className: string;
  grade: string;
}

export interface ProfileContent {
  basicSituation: string;
  examHistory: ExamResult[];
}

export interface ProfileMetadata {
  generatedAt: string;
  profileStartDate: string;
  profileEndDate: string;
  status: string;
}

export function getStudentProfile(studentId: string, params?: {
  'generateOptions.forceRegenerate'?: boolean;
  'generateOptions.startDate'?: string;
  'generateOptions.endDate'?: string;
}) {
  return request({
    url: `/api/v1/students/${studentId}/profile`,
    method: 'get',
    params,
  });
} 