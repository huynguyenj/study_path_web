// eslint-disable-next-line quotes
import { useState } from "react"
import { type LoginResponse, type LoginInformation } from '../types/login-type'
import { AuthApi } from '../api/auth-api'

export default function useLogin() {
  const [response, setResponse] = useState<LoginResponse>()
  const handleSubmitForm = async (data: LoginInformation) => {
    try {
      const responseData = await AuthApi.login(data)
      setResponse(responseData.data)
    } catch (error) {
      console.log(error)
    }
  }
  return {
      response,
      handleSubmitForm
  }
}
