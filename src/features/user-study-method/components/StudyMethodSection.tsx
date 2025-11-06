import LoadingScreen from '@/components/ui/loading/LoadingScreen'
import StudyMethodCard from './StudyMethodCard'
import ResultMethodSection from './ResultMethodSection'
import HeaderSection from './HeaderSection'
import ProcessSection from './ProcessSection'
import IconProcessSection from './IconProcessSection'
import QuestionSection from './QuestionSection'
import { useAppSelector } from '@/hooks/redux/redux-hooks'
import usePersonalStudyMethodContext from '../hooks/usePersonalStudyMethodContext'

export default function StudyMethodSection() {
  const recommendStudyMethod = useAppSelector((state) => state.studyMethodResult.resultList)
  const context = usePersonalStudyMethodContext()
  if (context.loading) return <LoadingScreen />

  if (context.personalStudyMethod) {
    return (
      <div className="px-5 my-5">
        <StudyMethodCard studyMethodPersonalId={context.studyMethodPersonalId} data={context.personalStudyMethod} />
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
        <HeaderSection />
        <ProcessSection />
        <IconProcessSection />
        <QuestionSection />
    </div>
  )
}
