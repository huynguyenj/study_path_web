import { EmojiEventsOutlinedIcon, LibraryBooksIcon, QueryBuilderOutlinedIcon, ShowChartIcon } from '@/assets/icons/mui-icon'
import DashboardCard from '@/features/user-dashboard/components/DashboardCard'
import { getCurrentDate } from '@/utils/getCurrenDate'

const dashboardDataList = [
  { title: 'Courses', data: 12, icon: LibraryBooksIcon },
  { title: 'Score', data: 87, icon: EmojiEventsOutlinedIcon },
  { title: 'Study time', data: 124, icon: QueryBuilderOutlinedIcon },
  { title: 'Streak', data: 28, icon: ShowChartIcon }
]

export default function DashboardPage() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="typography-h2 font-semibold text-center md:text-start">Welcome back</h2>
          <p className="typography-p">Theo dõi quá trình của bạn</p>
        </div>
        <div className='typography-p flex flex-col items-end'>
          <p>Hôm nay</p>
          <p className='font-bold'>{getCurrentDate()}</p>
        </div>
      </div>
      <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:flex mt-5 justify-between gap-5'>
        {dashboardDataList.map(({ title, data, icon }) => (
          <DashboardCard title={title} data={data} icon={icon} variant='green'/>
        ))}
      </div>
    </div>
  )
}
