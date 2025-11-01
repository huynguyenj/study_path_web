import { Input } from '@/components/ui/input/Input'
import { DriveFileRenameOutlineIcon, EmailIcon, LockIcon, MapIcon, PersonIcon } from '@/assets/icons/mui-icon'
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
          <div className='flex gap-8 mt-8'>
            <Input label='Tên đầy đủ' name='fullName' placeHolder='Nguyen Van A' type='text' size='md' variant='standard' error={errors.fullName}>
              <DriveFileRenameOutlineIcon/>
            </Input>
            <Input label='Tên sử dụng' name='userName' placeHolder='NguyenA' type='text' size='md' variant='standard' error={errors.userName}>
              <PersonIcon/>
            </Input>
          </div>
          <div className='flex gap-8 mt-5 mb-5'>
            <Input label='Email' placeHolder='nguyenvana@gmail.com' name='email' size='md' type='text' variant='standard' error={errors.email}>
              <EmailIcon/>
            </Input>
            <Input label='Mật khẩu' name='password' placeHolder='Password' type='password' size='md' variant='standard' error={errors.password}>
              <LockIcon/>
            </Input>
          </div>
          <Input label='Địa chỉ' name='address' placeHolder='Hồ Chí Minh' type='text' size='md' variant='standard' error={errors.address}>
            <MapIcon/>
          </Input>
          <DateInput colorChoice='white' label='Ngày sinh' name='dob'/>
          <Button disable= {loading ? true : false} type='normal' size='md' variant='primary'>
              {loading ? <CircularProgress color='inherit'/> : <p>Đăng ký</p>}
          </Button>
        </form>
         <div>
          <p className='typography-p text-center'>Đã có tài khoản ? <Link to={ACCESS_PUBLIC_PATH.LOGIN} className='text-blue-400 font-semibold'>Đăng nhập</Link></p>
        </div>
      </div>
    </FormStructure>
  )
}
