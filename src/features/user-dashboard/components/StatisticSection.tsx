import { EmojiEventsOutlinedIcon, QueryBuilderOutlinedIcon, ShowChartIcon } from '@/assets/icons/mui-icon'
import DashboardCard from '../../../components/ui/cards/DashboardCard'

const dashboardDataList = [
  // { id: 1, title: 'Courses', data: 12, icon: LibraryBooksIcon },
  { id: 2, title: 'Score', data: 87, icon: EmojiEventsOutlinedIcon },
  { id: 3, title: 'Study time', data: 124, icon: QueryBuilderOutlinedIcon },
  { id: 4, title: 'Streak', data: 28, icon: ShowChartIcon }
]
const selectionColor: Record<number, 'blue' | 'green' | 'purple' | 'orange'> = {
      0: 'blue',
      1: 'green',
      2: 'purple',
      3: 'orange'
}
export default function StatisticSection() {
  return (
    <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:flex mt-5 justify-between gap-5'>
           {dashboardDataList.map(({ id, title, data, icon }, index) => (
             <DashboardCard key={id} title={title} data={data} icon={icon} variant={selectionColor[index]}/>
           ))}
      </div>
  )
}
