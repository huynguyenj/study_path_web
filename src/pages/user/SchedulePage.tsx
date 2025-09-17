import HeaderScheduleSection from '@/features/user-schedule/components/HeaderScheduleSection'
import ScheduleSection from '@/features/user-schedule/components/ScheduleSection'
import ScheduleToday from '@/features/user-schedule/components/ScheduleToday'
import StatisticScheduleSection from '@/features/user-schedule/components/StatisticScheduleSection'

export default function SchedulePage() {
  return (
    <div className='mb-5'>
      <HeaderScheduleSection/>
      <StatisticScheduleSection/>
      <ScheduleSection/>
      <ScheduleToday/>
    </div>
  )
}
