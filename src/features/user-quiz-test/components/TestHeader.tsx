import Button from '@/components/ui/button/Button'
import type { QuizTestType } from '../types/quiz-test-type'
import CountDownSection from './CountDownSection'
import useSubmitTest from '../hooks/useSubmitTest'
import { useContext } from 'react'
import QuizAnswerContext from '../context/QuizAnswerProvider'

type TestHeaderProps = {
  quizInfo: QuizTestType
  startTime: Date
}

export default function TestHeader({ quizInfo, startTime }: TestHeaderProps) {
  const { submitTest } = useSubmitTest()
  const context = useContext(QuizAnswerContext)
  return (
    <div className='flex justify-between border-b-2'>
      <p className='typography-p font-semibold'>{quizInfo.name}</p>
      <div className='flex gap-5 items-center mb-5'>
        <CountDownSection totalSeconds={quizInfo.time}/>
        <Button type='rounded' size='sm' variant='primary' onClick={() => submitTest(
          {
            answer: context?.choices ? context.choices : [],
            start_at: startTime,
            end_at: new Date()
          }
        )}>
          Submit
        </Button>
      </div>
    </div>
  )
}
