import { InventoryIcon } from '@/assets/icons/mui-icon'
import LoadingScreen from '@/components/ui/loading/LoadingScreen'
import HeaderScheduleSection from '@/features/user-schedule/components/HeaderScheduleSection'
import ScheduleSection from '@/features/user-schedule/components/ScheduleSection'
import ScheduleToday from '@/features/user-schedule/components/ScheduleToday'
import StatisticScheduleSection from '@/features/user-schedule/components/StatisticScheduleSection'
import useGetAllScheduleOfUser from '@/features/user-schedule/hooks/useGetAllScheduleOfUser'
import useGetScheduleStatistics from '@/features/user-schedule/hooks/useGetScheduleStatistics'

export default function SchedulePage() {
  const { loading, scheduleList, getScheduleList } = useGetAllScheduleOfUser()
  const { getScheduleStatistic, scheduleStatistic, loading: isLoading, scheduleDetail } = useGetScheduleStatistics()
  
  if (loading || isLoading) {
    return <LoadingScreen/>
  }
  return (
    <div className='mb-5 relative'>
        <HeaderScheduleSection onRefreshSchedule={getScheduleList} getStatistic={getScheduleStatistic} scheduleList={scheduleList}/>
      { scheduleStatistic && scheduleDetail ? 
      <>
        <StatisticScheduleSection statisticData={scheduleStatistic}/>
        <ScheduleSection scheduleProcesses={scheduleDetail.processes}/>
        <ScheduleToday/>
      </>: 
      <>
        <div className='flex flex-col items-center justify-center h-[20rem]'>
          <InventoryIcon sx={{ fontSize: 50, color: ' #6c6c80' }}/>
          <p className='typography-p text-gray-primary'>Hãy chọn lịch bạn đã tạo để theo dõi.</p>
        </div>
      </>
      }
    </div>
  )
}
