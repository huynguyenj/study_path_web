import AuthCard from '@/components/ui/cards/AuthCard'
import { Input } from '@/components/ui/input/Input'
import { EmailIcon, LockIcon } from '@/assets/icons/mui-icon'
import Button from '@/components/ui/button/Button'
import { GoogleLogin } from '@react-oauth/google'
import HeaderPart from './HeaderPart'
import { Link } from 'react-router'
import { ACCESS_PUBLIC_PATH } from '@/const/router/access-path'
import type { ChangeEvent } from 'react'
import type { LoginInformation } from '../types/login-type'
import useFormCheck from '@/hooks/component-hooks/useFormCheck'
import useLogin from '../hooks/useLogin'


export default function LoginForm() {
  const { setValidateValue, errors, validate } = useFormCheck<LoginInformation>()
  const { handleSubmitForm } = useLogin()
  const handleSubmit = (e:ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const data:LoginInformation = {
      email: form.get('email') as string,
      password: form.get('password') as string
    }
    setValidateValue(data)
    const isValid = validate({ 'email': '', 'password':'' })
    if (isValid) {
      handleSubmitForm(data)
    }
  }
  return (
    <AuthCard>
      <HeaderPart title='Welcome' content='Sign in to experience more our feature'/>
      <div className='mt-5'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-10 my-2'>
          <div className='flex flex-col gap-5'>
          <Input name='email' placeHolder='email' size='md' type='text' variant='standard' error={errors.email}>
            <EmailIcon/>
          </Input>
          <Input name='password' placeHolder='password' size='md' type='password' variant='standard' error={errors.password}>
            <LockIcon/>
          </Input>
          </div>
          <Button size='md' variant='primary'>
            Login
          </Button>
        </form>
        <div>
          <p className='typography-p'>Don't have account? <Link to={ACCESS_PUBLIC_PATH.REGISTER} className='text-blue-400 font-semibold'>Sign up</Link></p>
        </div>
        <hr className='h-[0.5px] bg-white w-full mt-10'/>
        <div className='mt-2 flex flex-col gap-2'>
          <p className='text-center'>Or login with</p>
          <GoogleLogin onSuccess={() => console.log('Success')}/>
        </div>
      </div>
    </AuthCard>
  )
}
