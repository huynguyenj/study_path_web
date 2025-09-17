import { useContext } from 'react'
import StudyMethodContext from '../context/StudyMethodProvider'
import IconContainer from '@/components/ui/container/IconContainer'
import { ICON_QUESTION_SECTION } from '../const/icon-context'

export default function HeaderSection() {
  const context = useContext(StudyMethodContext)
  const currentPage = context?.page
  return (
    <div className='flex flex-col justify-center items-center'>
      {context?.questionIndexPage ? 
      <IconContainer icon={ICON_QUESTION_SECTION[currentPage ? currentPage -1 : 0]} containerType='circle' size='md' variant='primary'/>
      : <p>Loading...</p>
    }
      <h2 className='typography-h2 font-semibold text-center'>Đánh giá phương pháp học tập</h2>
      <p className='typography-p text-center'>Trả lời những câu hỏi này để nhận được khuyến nghị về phương pháp học tập phù hợp với phong cách học tập và sở thích của bạn.</p>
    </div>
  )
}


