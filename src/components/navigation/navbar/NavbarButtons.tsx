import { DashboardIcon } from '@/assets/icons/mui-icon'
import Button from '@/components/ui/button/Button'
import { ACCESS_PUBLIC_PATH, PRIVATE_PATH } from '@/const/router/access-path'
import useAuth from '@/features/auth/hooks/useAuth'
import { useNavigate } from 'react-router'

export default function NavbarButtons() {
  const navigate = useNavigate()
  const { listRoles, userId } = useAuth()
  const handleNavigate = (role: string[]) => {
    if (role.includes('Admin')) navigate(PRIVATE_PATH.ADMIN.DASHBOARD)
    if (role.includes('User')) navigate(PRIVATE_PATH.USER.DASHBOARD)
  }
  return (
    <div className='flex gap-2'>
      { userId && listRoles ? 
      <div>
        <Button size='circle' type='rounded' variant='primary' onClick={() => handleNavigate(listRoles)}>
          <DashboardIcon/>
        </Button>
      </div>
      :
      <>
        <Button type='normal' variant='primary' size='md' onClick={() => navigate(ACCESS_PUBLIC_PATH.LOGIN)}>
            Login
        </Button>
        <Button type='normal' variant='secondary' size='md' onClick={() => navigate(ACCESS_PUBLIC_PATH.REGISTER)}>
            Register
        </Button>
      </>
     }
   </div>
  )
}
