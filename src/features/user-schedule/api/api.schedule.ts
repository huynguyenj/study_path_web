import { apiPrivate } from '@/services/config/axios.config'
import type { CreateScheduleType, ProcessType, ScheduleResponse } from '../types/schedule-type'
import type { ResponseStructure } from '@/types/data-response/response'
import type { ScheduleStatisticResponse } from '../types/statistic-type'
import type { CreateTaskType } from '../types/task-type'

export const ScheduleApi = {
  createSchedule: async (userId: string, scheduleData: CreateScheduleType): Promise<null> => await apiPrivate.post(`/Gemini/${userId}/create-schedule`, scheduleData),
  getAllScheduleByUser: async (userId: string): Promise<ResponseStructure<ScheduleResponse[]>> => await apiPrivate.get(`/Schedule/get-all-by/${userId}`),
  getScheduleStatistic: async (scheduleId: string): Promise<ResponseStructure<ScheduleStatisticResponse>> => await apiPrivate.get(`/Schedule/schedule-week/${scheduleId}`),
  getScheduleDetail: async (scheduleId: string): Promise<ResponseStructure<ScheduleResponse>> => await apiPrivate.get(`/Schedule/get-by/${scheduleId}`),
  getProcessTasks: async (processId: string): Promise<ResponseStructure<ProcessType>> => await apiPrivate.get(`/Process/get-by/${processId}`),
  createTaskByAi: async (processId: string, data:CreateTaskType): Promise<ResponseStructure<ProcessType>> => await apiPrivate.post(`/Gemini/processId/${processId}/tasks/generate`, data),
  submitCompleteTask: async (processTaskId: string): Promise<null> => await apiPrivate.patch(`/ProcessTask/complete-processTask-by/${processTaskId}`)
}