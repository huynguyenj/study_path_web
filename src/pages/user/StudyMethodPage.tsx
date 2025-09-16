import ComparisonTable from '@/features/user-study-method/components/ComparisonTable'
import HeaderSection from '@/features/user-study-method/components/HeaderSection'
import IconProcessSection from '@/features/user-study-method/components/IconProcessSection'
import ProcessSection from '@/features/user-study-method/components/ProcessSection'
import QuestionSection from '@/features/user-study-method/components/QuestionSection'
import ResultMethodSection from '@/features/user-study-method/components/ResultMethodSection'
import { StudyMethodProvider } from '@/features/user-study-method/context/StudyMethodProvider'
import { useAppSelector } from '@/hooks/redux/redux-hooks'

export default function StudyMethodPage() {
  const methodResultList = useAppSelector((state) => state.studyMethodResult.resultList)
  const comparisonMethodList = useAppSelector((state) => state.methodComparison.resultList)
  return (
    <div className='px-5 my-5'>
      {methodResultList.length > 0 ? 
      <div className='flex flex-col gap-10'>
        <ResultMethodSection result={methodResultList}/>
        <ComparisonTable dataList={comparisonMethodList}/>
      </div>
      :
      <StudyMethodProvider>
        <HeaderSection/>
        <ProcessSection/>
        <IconProcessSection/>
        <QuestionSection/>
      </StudyMethodProvider>
    }
    </div>
  )
}
