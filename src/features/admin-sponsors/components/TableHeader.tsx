import { AddIcon, SearchIcon } from '@/assets/icons/mui-icon'
import Button from '@/components/ui/button/Button'
import { Input } from '@/components/ui/input/Input'

export default function TableHeader() {
  return (
    <div className='w-full flex items-center justify-end gap-5'>
            <div>
                  <Input name='search' placeHolder='Search' size='sm' type='text' variant='rounded'>
                        <SearchIcon/>
                  </Input>
            </div>
                  <Button size='md' variant='primary'>
                        <AddIcon/>
                        Add course
                  </Button>
      </div>
  )
}
