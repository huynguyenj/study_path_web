import { DashboardIcon } from '@/assets/icons/mui-icon'
import Button from '@/components/ui/button/Button'
import { ACCESS_PUBLIC_PATH, PRIVATE_PATH } from '@/const/router/access-path'
import useLocalStorage from '@/hooks/local-storage/useLocalStorage'
import { useNavigate } from 'react-router'

export default function NavbarButtons() {
  const navigate = useNavigate()
  const { getItem } = useLocalStorage('user-info')
  const userInfo = getItem()
  return (
    <div className='flex gap-2'>
      { userInfo ? 
      <div>
        <Button size='circle' type='rounded' variant='primary' onClick={() => navigate(PRIVATE_PATH.USER.DASHBOARD)}>
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
