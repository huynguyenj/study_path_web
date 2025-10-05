import { useCallback, useContext } from 'react'
import StudyMethodContext from '../context/StudyMethodProvider'

export default function QuestionList() {
  const context = useContext(StudyMethodContext)
  const questions = context?.questionIndexPage.question
  const colorChosen = useCallback(
    (choiceId: string, questionType: string) => {
      if (questionType === 'single') {
        return context?.choices.some(choice => choice.choiceId === choiceId) ? '#1D89EA': '#747373'
      } else {
        return context?.multipleChoices.some(choice => choice.choiceId.includes(choiceId)) ? '#1D89EA': '#747373'
      }
    },
    [context?.choices, context?.multipleChoices]
  )
  return (
    <div>
      {questions?.map((question) => (
            <div className='flex flex-col gap-5 mt-10' key={question.id}>
                  <p className='typography-p font-semibold'>{question.title}</p>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        {question.choices.map((choice) => (
                                <div 
                                 key={choice.id} 
                                 className='flex flex-col gap-1 px-5 py-4 border-2 rounded-2xl cursor-pointer' onClick={() => context?.handleChoice(choice.id, question.id, question.type)}
                                 style={{
                                  borderColor: colorChosen(choice.id, question.type)
                                 }}
                                 >
                                    <p className="typography-p font-semibold">{choice.title}</p>
                                    <p className="typography-p text-[#747373]">{choice.description}</p>
                                </div>
                        ))}
                  </div>
            </div>
      ))}
    </div>
  )
}
