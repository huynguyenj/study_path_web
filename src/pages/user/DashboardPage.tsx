import ActivitySection from '@/features/user-dashboard/components/ActivitySection'
import EventSection from '@/features/user-dashboard/components/EventSection'
import StatisticSection from '@/features/user-dashboard/components/StatisticSection'
import { getCurrentDate } from '@/utils/getCurrenDate'

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
     <StatisticSection/>
      <div className='w-full flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between mt-5'>
        <ActivitySection/>
        <EventSection/>
      </div>
    </div>
  )
}
