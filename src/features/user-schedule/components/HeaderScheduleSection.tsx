import { MoreTimeIcon } from '@/assets/icons/mui-icon'
import Button from '@/components/ui/button/Button'

export default function HeaderScheduleSection() {
  return (
    <div className='flex justify-between items-center'>
      <div>
        <h2 className='typography-h2 font-semibold'>Lịch học</h2>
        <p className='typography-p'>Quản lí lịch học của bạn</p>
      </div>
      <Button size='lg' variant='primary'>
        <MoreTimeIcon/>
        Tạo lịch học
      </Button>
    </div>
  )
}
