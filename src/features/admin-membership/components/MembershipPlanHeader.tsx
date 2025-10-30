import { AddIcon } from '@/assets/icons/mui-icon'
import Button from '@/components/ui/button/Button'
import { Input } from '@/components/ui/input/Input'
import Modal from '@/components/ui/popup/Modal'
import useToggle from '@/hooks/state/useToggle'
import useCreateMembershipPlan from '../hooks/useCreateMembershipPlan'
import { Select } from '@/components/ui/input/Select'
import CircularProgress from '@mui/material/CircularProgress'


export default function MembershipPlanHeader() {
  const { handleToggle, isToggle } = useToggle(false)
  const { errors, handleSubmit, loading } = useCreateMembershipPlan()
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
                  Tạo gói thành viên
            </Button>
      </div>
      {isToggle && 
            <Modal onClose={handleToggle} title='Tạo gói thành viên'>
                  <form className='flex flex-col gap-8 mt-10' onSubmit={handleSubmit}>
                        <Input label='Tên gói thành viên' name='name' placeHolder='Premium' size='md' type='text' variant='rounded' error={errors.name}/>
                        <Input label='Thời gian của gói' name='duration' placeHolder='1 tháng' size='md' type='text' variant='rounded' error={errors.duration}/>
                        <Input label='Chi phí' name='fee' placeHolder='79000' size='md' type='text' variant='rounded' error={errors.fee}/>
                        <div className='flex items-center gap-3'>
                              <p>Kiểu gói thành viên:</p>
                              <Select
                              name='memberShipPlanType'
                              size='md'
                              variant='rounded'
                              options={[
                                    { name: 'Tháng', value: 'MONTH' },
                                    { name: 'Năm', value: 'YEAR' }
                              ]}
                              />
                        </div>
                        <Button disable= {loading ? true: false} size='md' type='normal' variant={loading ? 'inactive' : 'primary'}>
                              {loading ? <CircularProgress/> : <p className='typography-p'>Tạo</p>}
                        </Button>
                  </form>
            </Modal>
      }
    </div>
  )
}
