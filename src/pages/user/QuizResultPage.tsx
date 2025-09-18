import ResultTestHeader from '@/features/user-quiz-test-result/components/ResultTestHeader'
import ResultTestSection from '@/features/user-quiz-test-result/components/ResultTestSection'

export default function QuizResultPage() {
  return (
    <div className='flex flex-col gap-5 py-5 px-10'>
      <ResultTestHeader/>
      <ResultTestSection/>
    </div>
  )
}
