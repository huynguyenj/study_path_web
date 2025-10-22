import { useContext } from 'react'
import QuizAnswerContext from '../context/QuizAnswerProvider'
import type { QuizQuestionType } from '@/features/user-quizzes/types/quiz-type'

type QuestionSectionProps = {
      question: QuizQuestionType
}

export default function QuestionSection({ question }: QuestionSectionProps) {
  const context = useContext(QuizAnswerContext)
  const chosenColor = (choiceId: string) => {
      const defaultStyle = 'px-3 py-5 border-2 mb-2 rounded-2xl cursor-pointer shadow-[5px_3px_0px_0px_rgba(0,0,0,0.5)]'
      const chosenStyle = 'bg-[#212529] text-white border-none scale-101 transition-scale duration-300 ease'
      const normalStyle = 'text-black border-[#747373]'
      return `${defaultStyle} ${context?.choices.find((choice) => choice.questionChoiceId === choiceId) ? `${chosenStyle}`: `${normalStyle}`} `
  }
  return (
    <>
      <div className='typography-h4 flex flex-col gap-1 font-semibold bg-[#242424] w-full rounded-t-2xl text-white text-center px-2 py-5 uppercase'>
            <p>{question.description}</p>
            {/* <p>({question.point} điểm)</p> */}
      </div>
      <div className='px-5 py-3'>
            {question.questionChoices.map((choice) => (
                  <div key={choice.id} className={chosenColor(choice.id)} onClick={() => context?.handleChoice(question.id, choice.id)}>
                        <p>{choice.name}</p>
                  </div>
            ))}
      </div>
    </>
  )
}
