import Tag from '@/components/ui/tags/Tag'
import type { MembershipPlanType } from '../types/membership-type'
import { MEMBERSHIP_PLAN_COLOR } from '../const/membership-color'
import { CheckCircleIcon, MoreHorizIcon } from '@/assets/icons/mui-icon'

type MembershipCardProps = {
      data: MembershipPlanType
}

export default function MembershipCard({ data }: MembershipCardProps) {
  return (
    <div className='card px-3 py-5 typography-p rounded-2xl flex flex-col gap-4'>
      <div className='flex justify-between'>
            <Tag content={data.name} variant={MEMBERSHIP_PLAN_COLOR[data.name.toLowerCase()]}/>
            <MoreHorizIcon className='text-gray-primary'/>
      </div>
      <div className='bg-[#F7F7F8] px-3 py-5 rounded-[10px] flex flex-col gap-2'>
            {data.features.map((feature) => (
                  <div className='flex items-center gap-1'>
                        <CheckCircleIcon/>
                        <p>{feature.name}</p>
                  </div>
            ))}
      </div>
    </div>
  )
}
