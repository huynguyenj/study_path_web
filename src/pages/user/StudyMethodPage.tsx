import HeaderSection from '@/features/user-study-method/components/HeaderSection'
import IconProcessSection from '@/features/user-study-method/components/IconProcessSection'
import ProcessSection from '@/features/user-study-method/components/ProcessSection'
import QuestionSection from '@/features/user-study-method/components/QuestionSection'
import { StudyMethodProvider } from '@/features/user-study-method/context/StudyMethodProvider'

export default function StudyMethodPage() {
 
  return (
    <div className='px-10 my-5'>
      <StudyMethodProvider>
        <HeaderSection/>
        <ProcessSection/>
        <IconProcessSection/>
        <QuestionSection/>
      </StudyMethodProvider>
    </div>
  )
}
