import AdminChartSection from '@/features/admin-dashboard/components/AdminChartSection'
import AdminDashboardStatistic from '@/features/admin-dashboard/components/AdminDashboardStatistic'
import RecentMemberTable from '@/features/admin-dashboard/components/RecentMemberTable'

export default function AdminDashboard() {
  return (
    <div className='mb-3'>
      <AdminDashboardStatistic/>
      <div className='mt-5'>
            <AdminChartSection/>
      </div>
      <div className='my-5 flex flex-col lg:flex-row gap-5'>
        <RecentMemberTable/>
      </div>
    </div>
  )
}
