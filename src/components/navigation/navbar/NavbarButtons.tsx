import Button from '@/components/ui/button/Button'
import { ACCESS_PUBLIC_PATH } from '@/const/router/access-path'
import { useNavigate } from 'react-router'

export default function NavbarButtons() {
  const navigate = useNavigate()
  return (
    <div className='flex gap-2'>
      <Button type='normal' variant='primary' size='md' onClick={() => navigate(ACCESS_PUBLIC_PATH.LOGIN)}>
           Login
      </Button>
      <Button type='normal' variant='secondary' size='md' onClick={() => navigate(ACCESS_PUBLIC_PATH.REGISTER)}>
           Register
      </Button>
   </div>
  )
}
