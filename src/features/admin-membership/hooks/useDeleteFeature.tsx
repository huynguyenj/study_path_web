import { useState } from 'react'
import useFeatureContext from './useFeatureContext'
import { MembershipAdminApi } from '../api/api.membership'
import { toast } from 'react-toastify'

export default function useDeleteFeature() {
  const [loading, setLoading] = useState(false)
  const context = useFeatureContext()
  const handleDeleteFeature = async (featureId: string) => {
      try {
        setLoading(true)
        await MembershipAdminApi.deleteFeature(featureId)
        toast.success('Xóa chức năng thành công')
        context.fetchListFeature()    
      } catch (error) {
        console.log(error)
        toast.error('Xóa chức năng thất bại')    
      } finally {
        setLoading(false)
      }
  }
  return {
      handleDeleteFeature,
      loading
  }
}
