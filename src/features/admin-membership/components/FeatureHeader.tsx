import useToggle from '@/hooks/state/useToggle'
import { Input } from '@/components/ui/input/Input'
import { AddIcon } from '@/assets/icons/mui-icon'
import Button from '@/components/ui/button/Button'
import Modal from '@/components/ui/popup/Modal'
import useCreateFeature from '../hooks/useCreateFeature'
import CircularProgress from '@mui/material/CircularProgress'

export default function FeatureHeader() {
  const { handleToggle, isToggle } = useToggle(false)
  const { errors, handleSubmit, loading } = useCreateFeature()
  return (
    <div className='flex justify-between items-center'>
      {/* <div className='flex items-center gap-3'>
            <Input name='search' placeHolder='Search' size='sm' type='text' variant='rounded'>
                  <SearchIcon/>
            </Input>
      </div> */}
      <div className='flex w-[100%] justify-end'>
            <Button type='normal' size='md' variant='primary' onClick={handleToggle}>
                  <AddIcon/>
                  Tạo tính năng
            </Button>
      </div>
      {isToggle && 
            <Modal onClose={handleToggle} title='Tạo tính năng'>
                  <form className='flex flex-col gap-8 mt-10' onSubmit={handleSubmit}>
                        <Input label='Tên chức năng' name='name' placeHolder='Tạo bài kiểm tra với AI' size='md' type='text' variant='rounded' error={errors.name}/>
                        <Input label='Mô tả của chức năng' name='description' placeHolder='Cho phép người dùng tạo bài kiểm tra với AI' size='md' type='text' variant='rounded' error={errors.description}/>
                        <Button disable= {loading ? true : false} size='md' type='normal' variant={loading ? 'inactive' : 'primary'}>
                              {loading ? <CircularProgress/> : 'Tạo'}
                        </Button>
                  </form>
            </Modal>
      }
    </div>
  )
}
