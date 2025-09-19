import Button from '@/components/ui/button/Button'
import type { QuizTestType } from '../types/quiz-test-type'
import CountDownSection from './CountDownSection'
import useSubmitTest from '../hooks/useSubmitTest'

type TestHeaderProps = {
  quizInfo: QuizTestType
}

export default function TestHeader({ quizInfo }: TestHeaderProps) {
  const { submitTest } = useSubmitTest()
  return (
    <div className='flex justify-between border-b-2'>
      <p className='typography-p font-semibold'>{quizInfo.name}</p>
      <div className='flex gap-5 items-center mb-5'>
        <CountDownSection totalSeconds={quizInfo.time}/>
        <Button size='sm' variant='primary' onClick={submitTest}>
          Submit
        </Button>
      </div>
    </div>
  )
}
