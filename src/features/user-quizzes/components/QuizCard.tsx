import { CallMadeIcon } from '@/assets/icons/mui-icon'
import type { QuizType } from '../types/quiz-type'
import { TagRuleQuiz } from '../const/quiz-card'
import Tag from '@/components/ui/tags/Tag'
import { useNavigate } from 'react-router'
import { PRIVATE_PATH } from '@/const/router/access-path'

type QuizCardProps = {
      data: QuizType
}

export default function QuizCard({ data }: QuizCardProps) {
  const navigate = useNavigate()
  return (
    <div className='relative px-5 py-5 card rounded-[24px]' >
     <Tag content={data.type} variant={TagRuleQuiz[data.type]}/>
      <div className='mt-5'>
            <p className='bg-gray-200 dark:bg-purple-500 rounded-t-2xl px-5 py-3 mb-2 font-semibold'>{data.name}</p>
            <div className='bg-gray-200 dark:bg-purple-500 rounded-b-2xl px-5 py-4 h-35'>
                  <p>Mô tả: {data.description}</p>
                  <p>Câu hỏi: {data.totalQuestion} câu</p>
                  <p>Thời gian: {data.time} phút</p>
            </div>
      </div>
      <div className='absolute bg-white dark:bg-black right-3 bottom-2 rounded-[12px] p-1 cursor-pointer' onClick={() => navigate(PRIVATE_PATH.TEST.QUIZ_TEST.replace(':id', data.id as string))}>
            <div className='bg-[#3B82F6] flex justify-center items-center p-3 rounded-2xl text-white'>
                  <CallMadeIcon/>
            </div>
      </div>
   </div>
  )
}
