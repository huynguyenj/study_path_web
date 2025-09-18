import { CheckCircleIcon } from '@/assets/icons/mui-icon'
import IconContainer from '@/components/ui/container/IconContainer'

export default function ResultTestHeader() {
  return (
    <div className='w-full mx-auto flex flex-col justify-center items-center gap-1'>
      <IconContainer containerType='circle' icon={CheckCircleIcon} size='md' variant='complete'/>
      <p className='typography-p font-semibold text-center'>Hoàn thành bài Quiz</p>
      <p className='typography-p font-semibold text-center'>Hãy tiếp tục học và thử lại để cải thiện điểm số của bạn</p>
    </div>
  )
}
