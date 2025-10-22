import HeaderSection from '@/features/user-study-method/components/HeaderSection'
import IconProcessSection from '@/features/user-study-method/components/IconProcessSection'
import ProcessSection from '@/features/user-study-method/components/ProcessSection'
import QuestionSection from '@/features/user-study-method/components/QuestionSection'
import ResultMethodSection from '@/features/user-study-method/components/ResultMethodSection'
import { StudyMethodProvider } from '@/features/user-study-method/context/StudyMethodProvider'
import { useAppSelector } from '@/hooks/redux/redux-hooks'

export default function StudyMethodPage() {
  const recommendStudyMethod = useAppSelector((state) => state.studyMethodResult.resultList)

  return (
    <div className='px-5 my-5'>
      {recommendStudyMethod.length > 0 ? 
      <div className='flex flex-col gap-10'>
        <ResultMethodSection result={recommendStudyMethod}/>
        {/* <ComparisonTable dataList={comparisonMethodList}/> */}
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
