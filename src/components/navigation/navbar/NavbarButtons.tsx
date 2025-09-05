import Button from '@/components/ui/button/Button'
import { ACCESS_PUBLIC_PATH } from '@/const/router/access-path'
import { useNavigate } from 'react-router'

export default function NavbarButtons() {
  const navigate = useNavigate()
  return (
    <div className='flex gap-2'>
      <Button variant='primary' size='md' onClick={() => navigate(ACCESS_PUBLIC_PATH.LOGIN)}>
           Login
      </Button>
      <Button variant='secondary' size='md' onClick={() => navigate(ACCESS_PUBLIC_PATH.REGISTER)}>
           Register
      </Button>
   </div>
  )
}
