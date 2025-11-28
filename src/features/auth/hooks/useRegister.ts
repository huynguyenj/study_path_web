import { useState, type ChangeEvent } from 'react'
import type { RegisterInformation } from '../types/register-type'
import useFormCheck from '@/hooks/component-hooks/useFormCheck'
import { toast } from 'react-toastify'
import { AuthApi } from '../api/auth-api'

export default function useRegister() {
  const { validate: isValid, errors } = useFormCheck<RegisterInformation>()
  const [loading, setLoading] = useState(false)
  const handleSubmitForm = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const dobString = new Date(form.get('dob') as string)
    const formData: RegisterInformation = {
      userName: form.get('userName') as string,
      password: form.get('password') as string,
      fullName: form.get('fullName') as string,
      address: form.get('address') as string,
      email: form.get('email') as string,
      dob: dobString
    }
    if (isValid(formData, { userName: '', password: '', address: '', email: '', fullName: '' })) {
      try {
        setLoading(true)
        await AuthApi.register(formData)
        toast.success('Register successfully!')
      } catch (error) {
        toast.error(error as string)
      } finally {
        setLoading(false)
      }
    }
  }
  return {
      handleSubmitForm,
      errors,
      loading
  }
}
