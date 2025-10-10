import { Input } from '@/components/ui/input/Input'
import { DriveFileRenameOutlineIcon, EmailIcon, LockIcon, MapIcon } from '@/assets/icons/mui-icon'
import DateInput from '@/components/ui/input/DateInput'
import Button from '@/components/ui/button/Button'
import { ACCESS_PUBLIC_PATH } from '@/const/router/access-path'
import { Link } from 'react-router'
import useRegister from '../hooks/useRegister'
import FormStructure from './FormStructure'

export default function RegisterForm() {
  const { errors, handleSubmitForm } = useRegister()
  return (
    <FormStructure>
      <div>
        <form onSubmit={handleSubmitForm} className='flex flex-col gap-6 my-2'>
          <Input name='fullname' placeHolder='Fullname' type='text' size='md' variant='standard'>
            <DriveFileRenameOutlineIcon/>
          </Input>
          <Input name='email' placeHolder='Email' type='text' size='md' variant='standard' error={errors.email}>
            <EmailIcon/>
          </Input>
          <Input name='password' placeHolder='Password' type='password' size='md' variant='standard' error={errors.password}>
            <LockIcon/>
          </Input>
          <Input name='address' placeHolder='Address' type='text' size='md' variant='standard'>
            <MapIcon/>
          </Input>
          <DateInput label='Date of birth' name='dob'/>
          <Button type='normal' size='md' variant='primary'>
              Register
          </Button>
        </form>
         <div>
          <p className='typography-p text-center'>Already have account? <Link to={ACCESS_PUBLIC_PATH.LOGIN} className='text-blue-400 font-semibold'>Sign in</Link></p>
        </div>
      </div>
    </FormStructure>
  )
}
