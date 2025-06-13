import axios from 'axios';

export interface Homework {
  id: string;
  title: string;
  date: string;
}

export interface HomeworkListResponse {
  homeworks: Homework[];
  total: number;
}

export function getHomeworkList(params?: { classId?: string }) {
  return axios.get<HomeworkListResponse>('/api/v1/homeworks', { params });
}