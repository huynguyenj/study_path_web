import { useContext } from 'react'
import StudyMethodContext from '../context/StudyMethodProvider'
import ChoiceContainer from './ui/ChoiceContainer'

export default function QuestionList() {
  const context = useContext(StudyMethodContext)
  const questions = context?.questionIndexPage.question
  return (
    <div>
      {questions?.map((question) => (
            <div className='flex flex-col gap-5 mt-10'>
                  <p className='typography-p font-semibold'>{question.title}</p>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        {question.choices.map((choice) => (
                              <ChoiceContainer title={choice.title} sub={choice.description}/>
                        ))}
                  </div>
            </div>
      ))}
    </div>
  )
}
