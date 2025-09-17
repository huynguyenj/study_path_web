import { SearchIcon } from '@/assets/icons/mui-icon'
import { Input } from '@/components/ui/input/Input'

export default function QuizHeader() {
  return (
    <div className='flex items-center justify-between'>
      <div className="">
            <h3 className="typography-h3 font-semibold">Quiz Center</h3>
            <p>Kiểm tra kiến thức của bạn</p>
      </div>
      <div className='flex items-center justify-center gap-5'>
      <Input name="Search quiz" placeHolder="Search quiz" size="sm" type="text" variant="outline">
            <SearchIcon/>
      </Input>
      </div>      
    </div>
  )
}
