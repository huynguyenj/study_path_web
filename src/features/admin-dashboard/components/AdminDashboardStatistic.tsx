import useGetStatistics from '../hooks/useGetStatistics'
import AdminDashboardCard from '@/components/ui/cards/AdminDashboardCard'
import { STATISTIC_CHOICE_CLR, STATISTIC_CHOICE_ICON } from '../const/statistic-color'

export default function AdminDashboardStatistic() {
  const { statistics } = useGetStatistics()
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
      {statistics.map((statistic, index) => (
        <AdminDashboardCard key={statistic.name} data={statistic.data} title={statistic.name} variant={STATISTIC_CHOICE_CLR[index]} icon={STATISTIC_CHOICE_ICON[index]}/>
      ))}
    </div>
  )
}
