import { SearchIcon } from '@/assets/icons/mui-icon'
import { Input } from '@/components/ui/input/Input'

export default function CourseHeader() {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center'>
      <div>
            <h3 className='typography-h3 font-semibold text-center md:text-start'>Thị trường giáo dục</h3>
            <p className='typography-p text-center md:text-start'>Khám phá khóa học, công nghệ và dịch vụ nâng cao việc học của bạn</p>
      </div>
      <div>
            <Input name='search' placeHolder='Search course' size='md' type='text' variant='outline'>
                  <SearchIcon/>
            </Input>
      </div>
    </div>
  )
}
