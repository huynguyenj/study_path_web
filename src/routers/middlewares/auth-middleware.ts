import { ACCESS_PUBLIC_PATH } from '@/const/router/access-path'
import type { UserInfo } from '@/features/auth/types/login-type'
import { redirect } from 'react-router'

export const authMiddleWare = ({ role }: {role: string}) => {
   return () => {
    const raw = localStorage.getItem('user-info')
    const userInfo: UserInfo | null = raw ? JSON.parse(raw) : null

    if (!userInfo) {
      throw redirect(ACCESS_PUBLIC_PATH.LOGIN)
    }
    if (role && !userInfo.roles?.includes(role)) {
      throw redirect(ACCESS_PUBLIC_PATH.NOT_FOUND)
    }
  }
}