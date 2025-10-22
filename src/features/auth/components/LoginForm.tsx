import { Input } from '@/components/ui/input/Input'
import { LockIcon, PersonIcon } from '@/assets/icons/mui-icon'
import Button from '@/components/ui/button/Button'
import { Link } from 'react-router'
import { ACCESS_PUBLIC_PATH } from '@/const/router/access-path'
import useLogin from '../hooks/useLogin'
import FormStructure from './FormStructure'
import CircularProgress from '@mui/material/CircularProgress'

export default function LoginForm() {
  const { handleSubmitForm, errors, loading } = useLogin()
  return (
    <FormStructure>
        <div className='mt-5'>
          <form onSubmit={handleSubmitForm} className='flex flex-col gap-10 my-2'>
            <div className='flex flex-col gap-5'>
            <Input name='username' placeHolder='username' size='md' type='text' variant='standard' error={errors.username}>
              <PersonIcon/>
            </Input>
            <Input name='password' placeHolder='password' size='md' type='password' variant='standard' error={errors.password}>
              <LockIcon/>
            </Input>
            </div>
            <Button disable= {loading ? true : false} type='normal' size='md' variant='primary'>
                 {loading ? <CircularProgress color='inherit'/> : <p>Login</p>}
            </Button>
          </form>
          <div>
            <p className='typography-p'>Don't have account? <Link to={ACCESS_PUBLIC_PATH.REGISTER} className='text-blue-400 font-semibold'>Sign up</Link></p>
          </div>
        </div>
    </FormStructure>
  )
}
