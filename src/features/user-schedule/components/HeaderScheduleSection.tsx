import { MoreTimeIcon } from '@/assets/icons/mui-icon'
import Button from '@/components/ui/button/Button'
import CreateScheduleModal from './CreateScheduleModal'
import useToggle from '@/hooks/state/useToggle'

export default function HeaderScheduleSection() {
  const { isToggle, handleToggle } = useToggle(false)
  return (
    <div className='flex justify-between items-center'>
      <div>
        <h2 className='typography-h2 font-semibold'>Lịch học</h2>
        <p className='typography-p'>Quản lí lịch học của bạn</p>
      </div>
      <Button type='normal' size='lg' variant='primary' onClick={handleToggle}>
        <MoreTimeIcon/>
        Tạo lịch học
      </Button>
      {isToggle && 
        <CreateScheduleModal onClose={handleToggle}/>
      }
    </div>
  )
}
