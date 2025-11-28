// eslint-disable-next-line quotes
import { useState, type ChangeEvent } from "react"
import { type LoginResponse, type LoginInformation } from '../types/login-type'
import { AuthApi } from '../api/auth-api'
import useFormCheck from '@/hooks/component-hooks/useFormCheck'
import useLocalStorage from '@/hooks/local-storage/useLocalStorage'
import { useNavigate } from 'react-router'
import { PRIVATE_PATH } from '@/const/router/access-path'
import { toast } from 'react-toastify'

export default function useLogin() {
  const { setItem } = useLocalStorage('user-info')
  const [loading, setLoading] = useState(false) 
  const { validate: isValid, errors } = useFormCheck<LoginInformation>()
  const navigate = useNavigate()
  const handleSubmitForm = async (e:ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const data:LoginInformation = {
      username: form.get('username') as string,
      password: form.get('password') as string
    }
    if ( isValid(data, { username: '', password: '' })) {
      try {
        setLoading(true)
        const responseData = await AuthApi.login(data)
        setItem<LoginResponse>(responseData)
        if (responseData.roles?.includes('User')) {
          navigate(PRIVATE_PATH.USER.DASHBOARD)
        } else {
          navigate(PRIVATE_PATH.ADMIN.DASHBOARD)
        }
        toast.success('Login successfully!')
      } catch (error) {
        console.log(error)
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
