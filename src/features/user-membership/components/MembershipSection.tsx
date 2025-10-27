import useGetMembership from '../hooks/useGetMembership'
import LoadingScreen from '@/components/ui/loading/LoadingScreen'
import MembershipCard from './MembershipCard'
import { RocketLaunchIcon } from '@/assets/icons/mui-icon'

export default function MembershipSection() {
  const { loading, membershipList } = useGetMembership()
  if (loading) {
    return <LoadingScreen/>
  }
  return (
    <div className='flex flex-col mt-5'>
      <div className='flex items-center justify-center gap-3 w-fit mx-auto'>
            <RocketLaunchIcon/>
            <p>Hãy chọn gói thành viên của bạn </p>
      </div>
      <div className='flex items-center gap-2 p-10'>
            {membershipList.length > 0 && 
            membershipList.map((membership) => (
                  <MembershipCard data={membership}/>
            ))
            }
      </div>
    </div>
  )
}
