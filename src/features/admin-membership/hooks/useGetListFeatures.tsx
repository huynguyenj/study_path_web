import { useCallback, useEffect, useState } from 'react'
import type { MembershipFeature } from '../types/membership-type'
import { MembershipAdminApi } from '../api/api.membership'

export default function useGetListFeatures() {
  const [listFeatures, setListFeatures] = useState<MembershipFeature[]>([])
  const [loading, setLoading] = useState(false)
  const fetchListFeature = useCallback(async () => {
      try {
        setLoading(true)
        const response = await MembershipAdminApi.getAllFeature()
        setListFeatures(response.data)   
      } catch (error) {
        console.log(error)    
      } finally {
        setLoading(false)
      }
  }, [])
  useEffect(() => {
      fetchListFeature()
  }, [])
  return {
      fetchListFeature,
      listFeatures,
      loading
  }
}
