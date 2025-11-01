import useLocalStorage from '@/hooks/local-storage/useLocalStorage'
import type { UserInfo } from '../types/login-type'
import { useMemo } from 'react'

export default function useAuth() {
  const { getItem } = useLocalStorage('user-info')
  const userId = useMemo(() => {
    return getItem<UserInfo>()?.userId
  }, [])
  
  const listRoles = useMemo(() => {
    return getItem<UserInfo>()?.roles
  }, [])
  return {
      userId,
      listRoles
  }
}
