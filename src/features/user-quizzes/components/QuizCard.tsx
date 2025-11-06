import { CallMadeIcon, DeleteIcon } from '@/assets/icons/mui-icon'
import type { QuizType } from '../types/quiz-type'
import { TagRuleQuiz } from '../const/quiz-card'
import Tag from '@/components/ui/tags/Tag'
import { useNavigate } from 'react-router'
import { PRIVATE_PATH } from '@/const/router/access-path'
import useDeleteQuiz from '../hooks/useDeleteQuiz'
import Modal from '@/components/ui/popup/Modal'
import useToggle from '@/hooks/state/useToggle'
import Button from '@/components/ui/button/Button'
import CircularProgress from '@mui/material/CircularProgress'

type QuizCardProps = {
      data: QuizType
}

export default function QuizCard({ data }: QuizCardProps) {
  const { handleDeleteQuiz, loading } = useDeleteQuiz()
  const { handleToggle, isToggle } = useToggle(false)
  const navigate = useNavigate()
  return (
    <div className='relative px-5 py-5 card dark:bg-[#5c5470] rounded-[24px]' >
      <div className='flex justify-between'>
            <Tag content={data.type} variant={TagRuleQuiz[data.type]}/>
            <div className='rounded-full cursor-pointer' onClick={handleToggle}>
                  <DeleteIcon sx={{ color: '#991B1B' }}/>
            </div>
      </div>
      <div className='mt-5'>
            <p className='bg-gray-200 dark:bg-purple-500 rounded-t-2xl px-5 py-3 mb-2 font-semibold'>{data.name}</p>
            <div className='bg-gray-200 dark:bg-purple-500 rounded-b-2xl px-5 py-4 h-35'>
                  <p>Mô tả: {data.description}</p>
                  <p>Câu hỏi: {data.totalQuestion} câu</p>
                  <p>Thời gian: {data.time} phút</p>
            </div>
      </div>
      <div className='absolute bg-white dark:bg-[#5c5470] right-3 bottom-2 rounded-[12px] p-1 cursor-pointer' onClick={() => navigate(PRIVATE_PATH.TEST.QUIZ_TEST.replace(':id', data.id as string))}>
            <div className='bg-[#3B82F6] flex justify-center items-center p-3 rounded-2xl text-white'>
                  <CallMadeIcon/>
            </div>
      </div>
      {isToggle && 
      <Modal title='Xác nhận' onClose={handleToggle}>
           <h4 className='typography-h4'>Bạn có chắc muốn xóa bài kiểm tra {data.name} không ?</h4>
           <div className='flex gap-2 justify-end mt-5'>
                  <Button size='md' type='normal' variant='inactive' onClick={handleToggle}>
                        Không
                  </Button>
                  <Button disable= {loading? true : false} size='md' type='normal' variant='danger' onClick={() => handleDeleteQuiz(data.id)}>
                        { loading ? <CircularProgress size={20} color='warning'/> : <p>Có</p> }
                  </Button>
           </div> 
      </Modal>
      }
   </div>
  )
}
