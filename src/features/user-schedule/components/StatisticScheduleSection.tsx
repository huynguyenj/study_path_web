import DashboardCard from '@/components/ui/cards/DashboardCard'
import { STATISTIC_ICON } from '../const/statistic-custom-icon'
import type { ScheduleStatisticResponse } from '../types/statistic-type'

export default function StatisticScheduleSection({ statisticData }: { statisticData: ScheduleStatisticResponse }) {
  return (
    <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:flex mt-5 justify-between gap-5'>
      <DashboardCard
        data={statisticData.taskOnDay}
        icon={STATISTIC_ICON[0]}
        title='Việc làm hôm nay'
        variant='blue'
      />
       <DashboardCard
        data={statisticData.totalTaskOfWeek}
        icon={STATISTIC_ICON[1]}
        title='Việc làm tuần này'
        variant='green'
      />
        <DashboardCard
         data={statisticData.totalTimeOfDay}
         icon={STATISTIC_ICON[2]}
         title='Thời gian học hôm nay'
         variant='orange'
       />
       <DashboardCard
        data={statisticData.percentComplete}
        icon={STATISTIC_ICON[3]}
        title='Mức độ hoàn thành'
        variant='purple'
      />
    </div>
  )
}
