import MembershipPlanHeader from './MembershipPlanHeader'
import MembershipCard from './MembershipCard'
import LoadingScreen from '@/components/ui/loading/LoadingScreen'
import useAdminMembershipContext from '../hooks/useAdminMembershipContext'

export default function MembershipPlanSection() {
  const context = useAdminMembershipContext()
  if (context.loading) {
    return <LoadingScreen/>
  }
  return (
    <div className='flex flex-col gap-5'>
      <MembershipPlanHeader />
      <div className='grid grid-cols-3 gap-5'>
            {context.membershipPlan.map((membership) => (
                  <MembershipCard key={membership.id} data={membership}/>
            ))}
      </div>
    </div>
  )
}
