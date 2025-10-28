import useGetStatistics from '../hooks/useGetStatistics'
import AdminDashboardCard from '@/components/ui/cards/AdminDashboardCard'
import { CardMembershipIcon, PaymentsIcon, PersonIcon } from '@/assets/icons/mui-icon'
import { getVietNameCurrency } from '@/utils/getCurrency'

export default function AdminDashboardStatistic() {
  const { statistics, loading } = useGetStatistics()
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
        <AdminDashboardCard loading={loading} title='Người dùng' data={statistics?.userCount ?? 0} icon={PersonIcon} variant='yellow' />
        <AdminDashboardCard loading={loading} title='Doanh thu' data={getVietNameCurrency(statistics?.totalAmount ?? 0)} icon={PaymentsIcon} variant='blue' />
        <AdminDashboardCard loading={loading} title='Số lượng thành viên đã được đăng ký' data={statistics?.memberShip ?? 0} icon={CardMembershipIcon} variant='purple'/>
    </div>
  )
}
