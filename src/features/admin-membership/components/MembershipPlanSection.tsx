import MembershipPlanHeader from './MembershipPlanHeader'
import MembershipCard from './MembershipCard'
import useAdminMembershipContext from '../hooks/useAdminMembershipContext'
import CircularProgress from '@mui/material/CircularProgress'

export default function MembershipPlanSection() {
  const context = useAdminMembershipContext()
  return (
    <div className='flex flex-col gap-5'>
      <MembershipPlanHeader />
        {context.loading ? 
          <div className='flex justify-center items-center mt-15'>
            <CircularProgress/>
          </div>
          :
            <div className='grid grid-cols-3 gap-5'>
              {context.membershipPlan.map((membership) => (
                  <MembershipCard key={membership.id} data={membership}/>
              ))}
          </div>
        }
    </div>
  )
}
