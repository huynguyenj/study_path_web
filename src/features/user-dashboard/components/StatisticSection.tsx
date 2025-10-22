import { EmojiEventsOutlinedIcon, QueryBuilderOutlinedIcon, ShowChartIcon } from '@/assets/icons/mui-icon'
import DashboardCard from '../../../components/ui/cards/DashboardCard'
import type { UserDashboardStatistic } from '../types/dashboard-statistic-type'

const selectionColor: Record<number, 'blue' | 'green' | 'purple' | 'orange'> = {
      0: 'blue',
      1: 'green',
      2: 'purple',
      3: 'orange'
}

type StatisticSectionProps = {
  statisticData: UserDashboardStatistic
}

export default function StatisticSection({ statisticData }: StatisticSectionProps ) {
  return (
    <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:flex mt-5 justify-between gap-5'>
             <DashboardCard title='Tổng số lần thử quiz' data={statisticData.totalQuizUserAttemp} icon={EmojiEventsOutlinedIcon} variant={selectionColor[0]}/>
             <DashboardCard title='Tổng thời gian đã làm tasks' data={statisticData.totalTimeProcessTaskComplete} icon={QueryBuilderOutlinedIcon} variant={selectionColor[1]}/>
             <DashboardCard title='Duy trì làm task' data={statisticData.streak} icon={ShowChartIcon} variant={selectionColor[2]}/>

      </div>
  )
}
