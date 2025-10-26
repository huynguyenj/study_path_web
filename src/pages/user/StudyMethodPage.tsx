import LoadingScreen from '@/components/ui/loading/LoadingScreen'
import HeaderSection from '@/features/user-study-method/components/HeaderSection'
import IconProcessSection from '@/features/user-study-method/components/IconProcessSection'
import ProcessSection from '@/features/user-study-method/components/ProcessSection'
import QuestionSection from '@/features/user-study-method/components/QuestionSection'
import ResultMethodSection from '@/features/user-study-method/components/ResultMethodSection'
import StudyMethodCard from '@/features/user-study-method/components/StudyMethodCard'
import { StudyMethodProvider } from '@/features/user-study-method/context/StudyMethodProvider'
import usePersonalStudyMethod from '@/features/user-study-method/hooks/usePersonalStudyMethod'
import { useAppSelector } from '@/hooks/redux/redux-hooks'

export default function StudyMethodPage() {
  const recommendStudyMethod = useAppSelector((state) => state.studyMethodResult.resultList)
  const { loading, personalStudyMethod, getPersonalStudyMethod } = usePersonalStudyMethod()

  if (loading) return <LoadingScreen />

  if (personalStudyMethod) {
    return (
      <div className="px-5 my-5">
        <StudyMethodCard refresh={getPersonalStudyMethod} data={personalStudyMethod} />
      </div>
    )
  }

  if (recommendStudyMethod.length > 0) {
    return (
      <div className="px-5 my-5 flex flex-col gap-10">
        <ResultMethodSection result={recommendStudyMethod} />
      </div>
    )
  }

  return (
    <div className="px-5 my-5">
      <StudyMethodProvider>
        <HeaderSection />
        <ProcessSection />
        <IconProcessSection />
        <QuestionSection />
      </StudyMethodProvider>
    </div>
  )
}
