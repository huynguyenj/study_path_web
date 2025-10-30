import Button from '@/components/ui/button/Button'
import FeatureSection from '@/features/admin-membership/components/FeatureSection'
import MembershipPlanSection from '@/features/admin-membership/components/MembershipPlanSection'
import { AdminFeatureProvider } from '@/features/admin-membership/context/AdminFeatureProvider'
import { AdminMembershipPlanProvider } from '@/features/admin-membership/context/AdminMembershipPlanProvider'
import { useState } from 'react'

export default function AdminMembershipManagement() {
  const [tabValue, setTabValue] = useState(1)
  const handleChange = (newValue: number) => {
    setTabValue(newValue)
  }
  return (
    <div>
      <div className='flex gap-2'>
        <Button size='md' type='normal' variant={tabValue === 1 ? 'primary' : 'inactive'} onClick={() => handleChange(1)}>
          Gói thành viên
        </Button>
        <Button size='md' type='normal' variant={tabValue === 2 ? 'primary' : 'inactive'} onClick={() => handleChange(2)}>
          Tính năng
        </Button>
      </div>
      <div className='mt-5'>
        {tabValue === 1 && 
         <AdminMembershipPlanProvider>
           <MembershipPlanSection/>
         </AdminMembershipPlanProvider>
        }
        {
          tabValue === 2 && 
        <AdminFeatureProvider>
          <FeatureSection/>
        </AdminFeatureProvider>
        }
      </div>
    </div>
  )
}
