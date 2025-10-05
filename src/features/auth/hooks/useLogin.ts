// eslint-disable-next-line quotes
import { useState, type ChangeEvent } from "react"
import { type LoginResponse, type LoginInformation } from '../types/login-type'
// import { AuthApi } from '../api/auth-api'
import useFormCheck from '@/hooks/component-hooks/useFormCheck'
import useLocalStorage from '@/hooks/local-storage/useLocalStorage'
import { useNavigate } from 'react-router'
import { PRIVATE_PATH } from '@/const/router/access-path'
import { toast } from 'react-toastify'

export default function useLogin() {
  const [response, setResponse] = useState<LoginResponse>()
  const { getItem, setItem } = useLocalStorage('auth-login')
  const { validate: isValid, errors } = useFormCheck<LoginInformation>()
  const navigate = useNavigate()
  const handleSubmitForm = async (e:ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const data:LoginInformation = {
      email: form.get('email') as string,
      password: form.get('password') as string
    }
    if ( isValid(data, { email: '', password: '' })) {
      try {
        // const responseData = await AuthApi.login(data)
        // setResponse(responseData.data)
        setItem<LoginInformation>(data)
        const isMatch = getItem('auth-register').password === data.password
        if (!isMatch) toast.error('Password is incorrect')
        else {
          setResponse(getItem('') as LoginResponse)
          navigate(PRIVATE_PATH.USER.DASHBOARD)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
  return {
      response,
      handleSubmitForm,
      errors
  }
}
