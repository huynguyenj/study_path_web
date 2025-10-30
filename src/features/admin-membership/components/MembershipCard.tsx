import Tag from '@/components/ui/tags/Tag'
import type { MembershipPlanType } from '../types/membership-type'
import { MEMBERSHIP_PLAN_COLOR } from '../const/membership-color'
import { MoreHorizIcon } from '@/assets/icons/mui-icon'
import { getVietNameCurrency } from '@/utils/getCurrency'
import Button from '@/components/ui/button/Button'

import useToggle from '@/hooks/state/useToggle'
import MembershipUpdateModal from './MembershipUpdateModal'
import MembershipDeleteModal from './MembershipDeleteModal'

type MembershipCardProps = {
      data: MembershipPlanType
}

export default function MembershipCard({ data }: MembershipCardProps) {
  const { handleToggle, isToggle } = useToggle(false)
  const { handleToggle: handleToggleDelete, isToggle:isToggleDelete } = useToggle(false)

  return (
    <div className='card px-3 py-5 typography-p rounded-2xl flex flex-col gap-4'>
      <div className='relative flex justify-between'>
            <Tag content={data.memberShipPlanType} variant={MEMBERSHIP_PLAN_COLOR[data.memberShipPlanType.toLowerCase()]}/>
            <div className='group'>
                  <MoreHorizIcon className='text-gray-primary cursor-pointer'/>
                  <div className='absolute right-0 top-5 flex-col gap-2 hidden scale-0 group-hover:scale-100 group-hover:block transition-all duration-300 ease-in-out'>
                        <Button size='sm' type='normal' variant='secondary' onClick={handleToggle}>
                              Xem chi tiết
                        </Button>
                        <Button size='sm' type='normal' variant='danger' onClick={handleToggleDelete}>
                              Xóa gói
                        </Button>
                  </div>
            </div>
      </div>
      <div>
            <h3 className='typography-h3 text-end font-medium'>{getVietNameCurrency(data.fee)}</h3>
            <h4 className='typography-h4 text-end text-gray-primary font-medium'>{data.duration}</h4>
      </div>
      {isToggle && 
         <MembershipUpdateModal data={data} onClose={handleToggle}/>
      }
      {
        isToggleDelete && 
        <MembershipDeleteModal membershipId={data.id} onClose={handleToggleDelete} />
      }
    </div>
  )
}

// 0fea37cc-58cf-4eb5-8ea7-21e6068530da