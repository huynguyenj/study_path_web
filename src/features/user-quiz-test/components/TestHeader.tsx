import Button from '@/components/ui/button/Button'
import CountDownSection from './CountDownSection'
import useSubmitTest from '../hooks/useSubmitTest'
import { useContext } from 'react'
import QuizAnswerContext from '../context/QuizAnswerProvider'
import { generateTimeToMinutes } from '@/utils/timeHelper'
import type { QuizType } from '@/features/user-quizzes/types/quiz-type'
import { toast } from 'react-toastify'
import useToggle from '@/hooks/state/useToggle'
import Modal from '@/components/ui/popup/Modal'
import CircularProgress from '@mui/material/CircularProgress'
import { toLocalISOString } from '@/utils/formatLocalDate'

type TestHeaderProps = {
  quizInfo: QuizType
  startTime: Date
}

export default function TestHeader({ quizInfo, startTime }: TestHeaderProps) {
  const { submitTest, loading } = useSubmitTest()
  const { handleToggle, isToggle } = useToggle(false)
  const context = useContext(QuizAnswerContext)
  const handleSubmit = () => {
    if (!context) throw new Error('Please warp component with provider')
    if (context.choices.length < quizInfo.totalQuestion) {
      toast.error( `Bạn đã làm được ${context?.choices.length}/${quizInfo.totalQuestion}. Hãy hoàn thành hết các câu trả lời.`)
      return
    }
    submitTest({
      answerList: context.choices,
      startAt: toLocalISOString(startTime),
      finishAt: toLocalISOString(new Date()),
      quizId: quizInfo.id
    })
  }
  return (
    <div className='flex justify-between'>
      <p className='typography-p flex items-center px-5 rounded-2xl font-semibold bg-black text-white'>{quizInfo.name}</p>
      <div className='flex gap-5 items-center mb-5'>
        <CountDownSection totalSeconds={generateTimeToMinutes(quizInfo.time)}/>
        <Button type='rounded' size='sm' variant='primary' onClick={handleToggle}>
          Submit
        </Button>
      </div>
      {isToggle && 
        <Modal onClose={handleToggle} title='Xác nhận'>
          <h4 className='typography-h4'>Bạn có chắc chắn là muốn nộp</h4>
            {loading ? 
            <div className='flex justify-center items-center'>
            <CircularProgress/>
            </div>
            :
          <div className='flex gap-2 justify-end'>
            <Button size='md' type='normal' variant='inactive' onClick={handleToggle}>
              Không
            </Button>
            <Button size='md' type='normal' variant='primary' onClick={handleSubmit}>
              Có
            </Button>
          </div>              
          }
        </Modal>
      }
    </div>
  )
}
