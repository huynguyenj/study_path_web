import type { ScheduleResponse } from '@/features/user-schedule/types/schedule-type'
import { apiPrivate } from '@/services/config/axios.config'
import type { ResponseStructure } from '@/types/data-response/response'
import type { UserDashboardStatistic } from '../types/dashboard-statistic-type'

export const UserDashboardApi = {
   getAllPersonalSchedule: async (userId: string): Promise<ResponseStructure<ScheduleResponse[]>> => await apiPrivate.get(`/Schedule/get-all-by/${userId}`),
   getStatisticPersonalSchedule: async (userId: string, scheduleId: string): Promise<ResponseStructure<UserDashboardStatistic>> => await apiPrivate.get(`/Quiz/user/${userId}/schedule/${scheduleId}`)   
}