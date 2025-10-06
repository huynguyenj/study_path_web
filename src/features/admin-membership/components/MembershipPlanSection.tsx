import useGetMembershipPlain from '../hooks/useGetMembershipPlain'
import MembershipPlanHeader from './MembershipPlanHeader'
import MembershipCard from './MembershipCard'

export default function MembershipPlanSection() {
  const { membershipPlan } = useGetMembershipPlain()
  return (
    <div className='flex flex-col gap-5'>
      <MembershipPlanHeader/>
      <div className='grid grid-cols-3 gap-5'>
            {membershipPlan.map((membership) => (
                  <MembershipCard data={membership}/>
            ))}
      </div>
    </div>
  )
}
