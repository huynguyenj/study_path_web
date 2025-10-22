import { useCallback, useContext } from 'react'
import StudyMethodContext from '../context/StudyMethodProvider'
import { motion } from 'motion/react'
export default function QuestionList() {
  const context = useContext(StudyMethodContext)
  const questions = context?.questionIndexPage?.evaluationQuestions
  const style = useCallback(
    (choiceId: string) => {
        const defaultClass = 'flex flex-col gap-1 px-5 py-4 border-2 rounded-2xl cursor-pointer'
        const chosenStyle = 'scale-105 border-[#1D89EA] transition-all duration-100 ease'
        const notChosenStyle = 'border-[#747373]'
        return `${defaultClass} ${context?.choices.some(choice => choice.choiceId === choiceId) ? chosenStyle : notChosenStyle}`
    },
    [context?.choices]
  )                         
  return (
    <div>
      {questions?.map((question) => (
            <div className='flex flex-col gap-5 mt-10' key={question.id}>
                  <p className='typography-p font-semibold'>{question.title}</p>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        {question.choices.map((choice) => (
                                <motion.div 
                                 initial= {{ x: 0, y: 0 }}
                                 whileHover={{ x: 2, y: -5 }}
                                 transition={{
                                   ease: 'easeInOut',
                                   duration: 0.1
                                 }}
                                 key={choice.id} 
                                 className={style(choice.id)} onClick={() => context?.handleChoice(choice.id, question.id, question.type)}
                                 >
                                    <p className="typography-p font-semibold">{choice.title}</p>
                                    <p className="typography-p text-[#747373]">{choice.description}</p>
                                </motion.div>
                        ))}
                  </div>
            </div>
      ))}
    </div>
  )
}
