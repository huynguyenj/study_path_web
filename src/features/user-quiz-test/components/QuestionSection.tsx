import type { QuestionType } from '../types/quiz-test-type'

type QuestionSectionProps = {
      question: QuestionType
}

export default function QuestionSection({ question }: QuestionSectionProps) {
  return (
    <div className='mt-5'>
      <div className='typography-p flex gap-1 mb-5 font-semibold'>
            <p>{question.name}</p>
            <p>({question.point} điểm)</p>
      </div>
      {question.choices.map((choice) => (
            <div className='px-3 py-3 border-2 mb-2 rounded-2xl'>
                  <p>{choice.name}</p>
            </div>
      ))}
    </div>
  )
}
