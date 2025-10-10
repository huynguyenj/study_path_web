import { AddIcon, SearchIcon } from '@/assets/icons/mui-icon'
import Button from '@/components/ui/button/Button'
import { Input } from '@/components/ui/input/Input'
import { Select } from '@/components/ui/input/Select'
export default function MembershipPlanHeader() {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-3'>
            <Input name='search' placeHolder='Search' size='sm' type='text' variant='rounded'>
                  <SearchIcon/>
            </Input>
            <Select 
                  name='Type' 
                  options={[
                        { name: 'Premium', value:'premium' },
                        { name: 'Vip', value:'vip' },
                        { name: 'Free', value:'free' }
                        ]}
                  size='sm'
                  variant='rounded'
                  />
      </div>
      <Button type='normal' size='md' variant='primary'>
            <AddIcon/>
            Add Membership
      </Button>
    </div>
  )
}
