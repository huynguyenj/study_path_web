import useFormCheck from '@/hooks/component-hooks/useFormCheck'
import { useState, type ChangeEvent } from 'react'
import type { CreateMembershipPlan } from '../types/membership-type'
import { toast } from 'react-toastify'
import { MembershipAdminApi } from '../api/api.membership'
import useAdminMembershipContext from './useAdminMembershipContext'


export default function useCreateMembershipPlan() {
  const { errors, validate } = useFormCheck<CreateMembershipPlan>()
  const context = useAdminMembershipContext()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault()
      const form = new FormData(e.currentTarget)
      const data: CreateMembershipPlan = {
         name: form.get('name') as string,
         memberShipPlanType: form.get('memberShipPlanType') as string,
         duration: form.get('duration') as string,
         fee: Number(form.get('fee')),
         featureIds: []
      }
      if (validate(data, { name: '', duration: '', fee: '' })) {
         try {
           setLoading(true) 
           await MembershipAdminApi.createMembership(data)
           toast.success('Tạo gói thành viên thành công')
           context.fetchMembershipPlan()
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
