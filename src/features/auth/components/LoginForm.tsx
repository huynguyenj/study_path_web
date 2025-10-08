import { Input } from '@/components/ui/input/Input'
import { EmailIcon, LockIcon } from '@/assets/icons/mui-icon'
import Button from '@/components/ui/button/Button'
import { Link } from 'react-router'
import { ACCESS_PUBLIC_PATH } from '@/const/router/access-path'
import useLogin from '../hooks/useLogin'
import FormStructure from './FormStructure'

export default function LoginForm() {
  const { handleSubmitForm, errors } = useLogin()
  return (
    <FormStructure>
        <div className='mt-5'>
          <form onSubmit={handleSubmitForm} className='flex flex-col gap-10 my-2'>
            <div className='flex flex-col gap-5'>
            <Input name='email' placeHolder='email' size='md' type='text' variant='standard' error={errors.email}>
              <EmailIcon/>
            </Input>
            <Input name='password' placeHolder='password' size='md' type='password' variant='standard' error={errors.password}>
              <LockIcon/>
            </Input>
            </div>
            <Button type='normal' size='md' variant='primary'>
              Login
            </Button>
          </form>
          <div>
            <p className='typography-p'>Don't have account? <Link to={ACCESS_PUBLIC_PATH.REGISTER} className='text-blue-400 font-semibold'>Sign up</Link></p>
          </div>
        </div>
    </FormStructure>
  )
}
