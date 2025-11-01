import { SearchIcon } from '@/assets/icons/mui-icon'
import { Input } from '@/components/ui/input/Input'
import useDebounce from '@/hooks/debounce/useDebounce'
import { useEffect, useState, type ChangeEvent } from 'react'
import useUserManagementContext from '../hooks/useUserManagementContext'


export default function TableUserHeader() {
  const context = useUserManagementContext()
  const [searchText, setSearchText] = useState('')
  const debounceText = useDebounce(searchText, 800)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget) {
      setSearchText(e.currentTarget.value)
    }
  }
  useEffect(() => {
    console.log(debounceText)
    if (debounceText) {
      context.fetchUsersByName(debounceText)
    }
  }, [debounceText])
  return (
    <div className='flex items-center gap-5 justify-between mb-3'>
      {/* <Button type='normal' size='md' variant='primary'>
        <IosShareIcon/>
        Export
      </Button> */}
      <div className='flex gap-2'>
            <Input name='search' placeHolder='Search' size='sm' type='text' variant='rounded' 
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}>
                  <SearchIcon/>
            </Input>
            {/* <Select 
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
                  /> */}
      </div>
    </div>
  )
}
