import StudyMethodSection from '@/features/user-study-method/components/StudyMethodSection'
import { PersonalStudyMethodProvider } from '@/features/user-study-method/context/PersonalStudyMethodProvider'
import { StudyMethodProvider } from '@/features/user-study-method/context/StudyMethodProvider'
export default function StudyMethodPage() {
  return (
   <PersonalStudyMethodProvider>
    <StudyMethodProvider>
      <StudyMethodSection/>
    </StudyMethodProvider>
   </PersonalStudyMethodProvider>
  )
}
