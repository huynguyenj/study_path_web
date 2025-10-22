import { MoreTimeIcon } from '@/assets/icons/mui-icon'
import Button from '@/components/ui/button/Button'
import CreateScheduleModal from './CreateScheduleModal'
import useToggle from '@/hooks/state/useToggle'
import { Select } from '@/components/ui/input/Select'
import { useState, type ChangeEvent } from 'react'
import type { ScheduleResponse } from '../types/schedule-type'

type HeaderScheduleSectionProps = {
  onRefreshSchedule: () => void
  getStatistic: (scheduleId: string) => void
  scheduleList: ScheduleResponse[]
}

export default function HeaderScheduleSection({ getStatistic, onRefreshSchedule, scheduleList }: HeaderScheduleSectionProps) {
  const { isToggle, handleToggle } = useToggle(false)
  const [selectedSchedule, setSelectedSchedule] = useState('')
   const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
      const value = e.currentTarget.value
      setSelectedSchedule(value)
      getStatistic(value)
  }
  return (
    <div className='flex justify-between items-center'>
      <div>
        <h2 className='typography-h2 font-semibold'>Lịch học</h2>
        <p className='typography-p'>Quản lí lịch học của bạn</p>
      </div>
      <div className='flex gap-3'>
        {scheduleList.length > 0 && 
        <Select
            value={selectedSchedule}
            name='Schedule'
            size='lg'
            variant='outline'
            options={ [
              { name: 'Chọn schedule của bạn', value:'' }, ...scheduleList.map((schedule) => (
                        { name: schedule.title, value: schedule.id }
                      ))]}
            onChange={handleChange}
          />
        }
      <Button type='normal' size='lg' variant='primary' onClick={handleToggle}>
        <MoreTimeIcon/>
        Tạo lịch học
      </Button>
      </div>
      {isToggle && 
        <CreateScheduleModal onRefresh={onRefreshSchedule} onClose={handleToggle}/>
      }
    </div>
  )
}
