import LoadingScreen from '@/components/ui/loading/LoadingScreen'
import QuizSection from '@/features/user-quizzes/components/QuizSection'
import { QuizContextProvider } from '@/features/user-quizzes/context/QuizContextProvider'
import useCheckMembership from '@/features/user-quizzes/hooks/useCheckMembership'


export default function QuizPage() {
  const { isLoading, isSubscribed } = useCheckMembership()
  if (isLoading) {
    return <LoadingScreen/>
  }
  return (
    <>
    {isSubscribed ? 
     <QuizContextProvider>
      <QuizSection/>
    </QuizContextProvider>
    :
    <>
      <div className="h-[85vh] flex flex-col justify-center items-center bg-gray-100 dark:bg-black p-4">
        <div className="bg-white dark:bg-gray-700 p-8 rounded shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">Cần trả phí để dùng tính năng.</h2>
          <p className="mb-6">Bạn cần phải trả gói để có thể dùng được tính năng này. Hãy mua gói ở trang chủ để dùng được tính năng.</p>
        </div>
      </div>
    </>
    }
    </>
  )
}
