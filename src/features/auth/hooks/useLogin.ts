// eslint-disable-next-line quotes
import { useState, type ChangeEvent } from "react"
import { type LoginResponse, type LoginInformation } from '../types/login-type'
import { AuthApi } from '../api/auth-api'
import useFormCheck from '@/hooks/component-hooks/useFormCheck'

export default function useLogin() {
  const [response, setResponse] = useState<LoginResponse>()
  const { validate: isValid, errors } = useFormCheck<LoginInformation>()
  const handleSubmitForm = async (e:ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const data:LoginInformation = {
      email: form.get('email') as string,
      password: form.get('password') as string
    }
    if ( isValid(data, { email: '', password: '' })) {
      try {
        const responseData = await AuthApi.login(data)
        setResponse(responseData.data)
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
