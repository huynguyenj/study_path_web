import { statisticData } from '../statisticData'
import DashboardCard from '@/components/ui/cards/DashboardCard'
import { STATISTIC_COLOR, STATISTIC_ICON } from '../const/statistic-custom-icon'

export default function StatisticScheduleSection() {
  return (
    <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:flex mt-5 justify-between gap-5'>
      {statisticData.map((data, index) => (
        <DashboardCard key={data.title} title={data.title} data={data.number} variant={STATISTIC_COLOR[index]} icon={STATISTIC_ICON[index]}/>
      ))}
    </div>
  )
}
