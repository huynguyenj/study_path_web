import type { PaginationResponse, ResponseStructure } from '@/types/data-response/response'
import axios from 'axios'
import type { GoogleAnalyticsNewUserType, GoogleAnalyticsType } from '../types/google-analytics-type'
import type { AdminStatisticsType, RevenueYearlyType } from '../types/statistic-type'
import { apiPrivate } from '@/services/config/axios.config'
import type { RecentPaymentsType } from '../types/table-type'

export const AnalyticApis = {
  getGoogleAnalyticsDataUserWeekly: async (): Promise<ResponseStructure<GoogleAnalyticsType>> => {
    const response = await axios.get(import.meta.env.VITE_API_ENDPOINT_ANALYTICS+'/analytics/v1/google-analytics/active-user/sessions/weekly')
    return response.data
  },
  getGoogleAnalyticsDataNewUserYearly: async (year: string): Promise<ResponseStructure<GoogleAnalyticsNewUserType[]>> => {
    const response = await axios.get(import.meta.env.VITE_API_ENDPOINT_ANALYTICS+`/analytics/v1/google-analytics/new-user/yearly?year=${year}`)
    return response.data
  },
  getAdminStatistics: async (): Promise<ResponseStructure<AdminStatisticsType>> => apiPrivate.get('/Admin/get-admin-infor'),
  getRevenueByYear: async (year: number): Promise<ResponseStructure<RevenueYearlyType>> => await apiPrivate.get(`/payment/get-payment-of-year?year=${year}`),
  getRecentPayments: async (currentPage: number): Promise<PaginationResponse<RecentPaymentsType>> => await apiPrivate.get(`/payment/get-recent-payment?pageNumber=${currentPage}&pageSize=5`)
}