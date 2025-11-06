import { AddIcon } from '@/assets/icons/mui-icon'
import Button from '@/components/ui/button/Button'
// import { Input } from '@/components/ui/input/Input'
import useToggle from '@/hooks/state/useToggle'
import CreateQuizModal from './CreateQuizModal'


export default function QuizHeader() {
  const { handleToggle, isToggle } = useToggle(false)
  return (
    <div className='flex items-center justify-between'>
      <div className="">
            <h3 className="typography-h3 font-semibold">Trung tâm bài kiểm tra</h3>
            <p>Kiểm tra kiến thức của bạn</p>
      </div>
      <div className='flex items-center justify-center gap-5'>
      <Button size='md' type='normal' variant='primary' onClick={handleToggle}>
        <AddIcon/>
        Tạo bài kiểm tra
      </Button>
      {/* <Input name="Search quiz" placeHolder="Search quiz" size="sm" type="text" variant="outline">
            <SearchIcon/>
      </Input> */}
      </div>  
      {isToggle && 
      <CreateQuizModal handleToggle={handleToggle}/>    
      }
    </div>
  )
}
