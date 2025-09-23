import { IosShareIcon, PersonIcon, SearchIcon } from '@/assets/icons/mui-icon'
import Button from '@/components/ui/button/Button'
import { Input } from '@/components/ui/input/Input'
import Select from '@/components/ui/input/Select'
export default function TableUserHeader() {
  return (
    <div className='flex items-center gap-5 justify-between mb-3'>
      <Button size='md' variant='primary'>
        <IosShareIcon/>
        Export
      </Button>
      <div className='flex gap-2'>
            <Input name='search' placeHolder='Search' size='sm' type='text' variant='rounded'>
                  <SearchIcon/>
            </Input>
            <Select 
                  name='Role' 
                  options={[
                        { name: 'Admin', value: 'admin' }, 
                        { name: 'User', value: 'user' }]
                  }
                  size='sm'
                  variant='rounded'
                  icon={PersonIcon}
                  />
             <Select 
                  name='Status' 
                  options={[
                        { name: 'Active', value: false }, 
                        { name: 'Deleted', value: true }]
                  }
                  size='sm'
                  variant='rounded'
                  icon={PersonIcon}
                  />
      </div>
    </div>
  )
}
