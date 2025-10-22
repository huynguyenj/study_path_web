import { Input } from '@/components/ui/input/Input'
import { DriveFileRenameOutlineIcon, LockIcon, MapIcon, PersonIcon } from '@/assets/icons/mui-icon'
import DateInput from '@/components/ui/input/DateInput'
import Button from '@/components/ui/button/Button'
import { ACCESS_PUBLIC_PATH } from '@/const/router/access-path'
import { Link } from 'react-router'
import useRegister from '../hooks/useRegister'
import FormStructure from './FormStructure'
import CircularProgress from '@mui/material/CircularProgress'

export default function RegisterForm() {
  const { errors, handleSubmitForm, loading } = useRegister()
  return (
    <FormStructure>
      <div>
        <form onSubmit={handleSubmitForm} className='flex flex-col gap-6 my-2'>
          <Input name='fullname' placeHolder='Fullname' type='text' size='md' variant='standard'>
            <DriveFileRenameOutlineIcon/>
          </Input>
          <Input name='username' placeHolder='Username' type='text' size='md' variant='standard' error={errors.username}>
            <PersonIcon/>
          </Input>
          <Input name='password' placeHolder='Password' type='password' size='md' variant='standard' error={errors.password}>
            <LockIcon/>
          </Input>
          <Input name='address' placeHolder='Address' type='text' size='md' variant='standard'>
            <MapIcon/>
          </Input>
          <DateInput label='Date of birth' name='dob'/>
          <Button disable= {loading ? true : false} type='normal' size='md' variant='primary'>
              {loading ? <CircularProgress color='inherit'/> : <p>Register</p>}
          </Button>
        </form>
         <div>
          <p className='typography-p text-center'>Already have account? <Link to={ACCESS_PUBLIC_PATH.LOGIN} className='text-blue-400 font-semibold'>Sign in</Link></p>
        </div>
      </div>
    </FormStructure>
  )
}
