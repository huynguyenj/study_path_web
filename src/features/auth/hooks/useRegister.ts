import type { ChangeEvent } from 'react'
// import { AuthApi } from '../api/auth-api'
import type { RegisterInformation } from '../types/register-type'
import useFormCheck from '@/hooks/component-hooks/useFormCheck'
import useLocalStorage from '@/hooks/local-storage/useLocalStorage'
import { toast } from 'react-toastify'

export default function useRegister() {
  const { validate: isValid, errors } = useFormCheck<RegisterInformation>()
  const { setItem } = useLocalStorage('auth-register')
  const handleSubmitForm = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const formData: RegisterInformation = {
      email: form.get('email') as string,
      password: form.get('password') as string,
      address: form.get('address') as string,
      dob: form.get('dob') as string,
      fullname: form.get('fullname') as string,
      phone: form.get('phone') as string
    }
    if (isValid(formData, { email: '', password: '' })) {
      try {
        // await AuthApi.register(formData)
        setItem<RegisterInformation>(formData)
        toast.success('Register successfully!')
      } catch (error) {
        console.log(error)
      }
    }
  }
  return {
      handleSubmitForm,
      errors
  }
}
