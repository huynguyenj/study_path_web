import useFormCheck from '@/hooks/component-hooks/useFormCheck'
import type { CreateFeature } from '../types/membership-type'
import { useState, type ChangeEvent } from 'react'
import { MembershipAdminApi } from '../api/api.membership'
import { toast } from 'react-toastify'
import useFeatureContext from './useFeatureContext'

export default function useCreateFeature() {
  const { errors, validate } = useFormCheck<CreateFeature>()
  const [loading, setLoading] = useState(false)
  const context = useFeatureContext()
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault()
      const form = new FormData(e.currentTarget)
      const createdData: CreateFeature = {
        name: form.get('name') as string,
        description: form.get('description') as string
      }
      if (validate(createdData, { name: '', description: '' })) {
            try {
              setLoading(true)
              await MembershipAdminApi.createFeature(createdData)
              toast.success('Tạo tính năng thành công')
              context.fetchListFeature()
            } catch (error) {
              toast.error(error as string)    
            } finally {
              setLoading(false)
            }
      }
  }
  return {
      errors,
      loading,
      handleSubmit
  }
}
