import { useContext } from 'react'
import type { QuestionType } from '../types/quiz-test-type'
import QuizAnswerContext from '../context/QuizAnswerProvider'

type QuestionSectionProps = {
      question: QuestionType
}

export default function QuestionSection({ question }: QuestionSectionProps) {
  const context = useContext(QuizAnswerContext)
  const chosenColor = (choiceId: string) => {
      return context?.choices.find((choice) => choice.choiceId === choiceId) ? '#1D89EA': '#747373'
  }
  return (
    <div className='mt-5'>
      <div className='typography-p flex gap-1 mb-5 font-semibold'>
            <p>{question.name}</p>
            <p>({question.point} điểm)</p>
      </div>
      {question.choices.map((choice) => (
            <div key={choice.id} className='px-3 py-3 border-2 mb-2 rounded-2xl cursor-pointer' onClick={() => context?.handleChoice(question.id, choice.id)} style={{ borderColor: chosenColor(choice.id) }}>
                  <p>{choice.name}</p>
            </div>
      ))}
    </div>
  )
}
