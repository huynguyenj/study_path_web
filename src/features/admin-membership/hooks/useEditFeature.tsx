import { useState } from 'react'
import type { MembershipFeature, UpdateFeature } from '../types/membership-type'
import { MembershipAdminApi } from '../api/api.membership'
import { toast } from 'react-toastify'
import useFeatureContext from './useFeatureContext'

export default function useEditFeature() {
  const [featureDetail, setFeatureDetail] = useState<MembershipFeature>()
  const [loading, setLoading] = useState(false)
  const context = useFeatureContext()
  const fetchFeatureDetail = async (featureId: string) => {
      try {
        setLoading(true)
        const response = await MembershipAdminApi.getFeatureDetail(featureId)
        setFeatureDetail(response.data)    
      } catch (error) {
        console.log(error)
        toast.error('Lấy thông tin tính năng thất bại')    
      } finally {
        setLoading(false)
      }
  }

  const updateFeature = async (featureId: string, updatedData: UpdateFeature ) => {
      try {
        setLoading(true)
        await MembershipAdminApi.updateFeature(featureId, updatedData)
        toast.success('Cập nhật tính năng thành công')    
        context.fetchListFeature()
      } catch (error) {
        console.log(error)
        toast.error('Cập nhật tính năng thất bại')    
      } finally {
        setLoading(false)
      }
  }
  return {
      featureDetail,
      loading,
      fetchFeatureDetail,
      updateFeature
  }
}
