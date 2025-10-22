import { InventoryIcon } from '@/assets/icons/mui-icon'
import { Select } from '@/components/ui/input/Select'
import LoadingScreen from '@/components/ui/loading/LoadingScreen'
import ActivitySection from '@/features/user-dashboard/components/ActivitySection'
import EventSection from '@/features/user-dashboard/components/EventSection'
import StatisticSection from '@/features/user-dashboard/components/StatisticSection'
import useGetPersonalSchedule from '@/features/user-dashboard/hooks/useGetPersonalSchedule'
import useGetStatistic from '@/features/user-dashboard/hooks/useGetStatistic'
import { getCurrentDate } from '@/utils/getCurrenDate'
import { useState, type ChangeEvent } from 'react'

export default function DashboardPage() {
  const { loading, personalScheduleList } = useGetPersonalSchedule()
  const { dashboardStatistic, getStatistic, loading: statisticLoading } = useGetStatistic()
  const [selectedSchedule, setSelectedSchedule] = useState('')
  if (loading || statisticLoading) {
    return <LoadingScreen/>
  }
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value
    setSelectedSchedule(value)
    getStatistic(value)
  }
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="typography-h2 font-semibold text-center md:text-start">Welcome back</h2>
          <p className="typography-p">Theo dõi quá trình của bạn</p>
        </div>
        <div className='flex gap-5'>
          {personalScheduleList.length > 0 && 
            <Select
              value={selectedSchedule}
              name='schedule'
              size='md'
              variant='outline'
              options={[
                { name: 'Chọn schedule', value: '' },
                ...personalScheduleList.map((schedule) => (
                { name: schedule.title, value: schedule.id }
              ))
              ]}
              onChange={handleChange}
            />
          
          }
          <div className='typography-p flex flex-col items-end'>
            <p>Hôm nay</p>
            <p className='font-bold'>{getCurrentDate()}</p>
          </div>
        </div>
      </div>
    {dashboardStatistic ? 
     <>
     <StatisticSection statisticData={dashboardStatistic}/>
      <div className='w-full flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between mt-5 mb-5'>
        <ActivitySection recentActive={dashboardStatistic.nearProcessTaskComplete}/>
        <EventSection event={dashboardStatistic.subjectFuture}/>
      </div>
     </>
     : 
        <div className='flex flex-col items-center justify-center h-[20rem]'>
          <InventoryIcon sx={{ fontSize: 50, color: ' #6c6c80' }}/>
          <p className='typography-p text-gray-primary'>Hãy chọn lịch bạn đã tạo để theo dõi.</p>
        </div>
    }
    </div>
  )
}
