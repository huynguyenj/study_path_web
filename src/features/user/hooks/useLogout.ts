import { useState } from 'react'
import { toast } from 'react-toastify'
// import { AuthApi } from '../api/auth-api'
import useLocalStorage from '@/hooks/local-storage/useLocalStorage'
import { useNavigate } from 'react-router'
import { ACCESS_PUBLIC_PATH } from '@/const/router/access-path'

export default function useLogout() {
  const [loading, setLoading] = useState(false)
  const { clearItem } = useLocalStorage('user-info')
  const navigate = useNavigate()
  const handleLogout = async () => {
      try {
         setLoading(true)   
      //    await AuthApi.logout()
         clearItem()
         toast.success('Đăng xuất thành công')
         navigate(ACCESS_PUBLIC_PATH.HOME)
      } catch (error) {
         toast.error(error as string)   
      } finally {
         setLoading(false)
      }
  }
  return {
      handleLogout,
      loading
  }
}
