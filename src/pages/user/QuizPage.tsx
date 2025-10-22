import PaginationSimple from '@/components/pagination/PaginationSimple'
import LoadingScreen from '@/components/ui/loading/LoadingScreen'
import QuizHeader from '@/features/user-quizzes/components/QuizHeader'
import QuizHistory from '@/features/user-quizzes/components/QuizHistory'
import QuizSection from '@/features/user-quizzes/components/QuizSection'
import QuizStatistic from '@/features/user-quizzes/components/QuizStatistic'
import useGetListQuiz from '@/features/user-quizzes/hooks/useGetListQuiz'
import useGetQuizStatistic from '@/features/user-quizzes/hooks/useGetQuizStatistic'
import usePagination from '@/hooks/pagination/usePagination'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { useEffect, useState } from 'react'

export default function QuizPage() {
  const [tabValue, setTabValue] = useState('1')
  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue)
  }
  const { quizStatistic } = useGetQuizStatistic()
  const { currentPage, goBackPage, goToNextPage, setTotalPages, totalPages } = usePagination()
  const { loading, quizList, getListQuizData } = useGetListQuiz(currentPage)
   useEffect(() => {
    if (quizList?.totalPages) {
      setTotalPages(quizList.totalPages)
    }
  }, [quizList?.totalPages])

  if (loading) {
    return <LoadingScreen/>
  }
  return (
    <div className='mb-5'>
      <QuizHeader refreshQuizData={getListQuizData}/>
      {quizStatistic && 
        <QuizStatistic quizStatisticData={quizStatistic}/>
      }
      <div className='mt-5'>
        <Tabs
          value={tabValue}
          onChange={handleChange}
        >
          <Tab label='Danh sách quiz có sẵn' value='1' sx={{ color: '#747373' }}/>
          <Tab label='Lịch sử bài quiz' value='2' sx={{ color: '#747373' }}/>
        </Tabs>
        <div hidden={tabValue !== '1'} className="mt-4 flex flex-col gap-5">
        {quizList ? 
        <>
        <QuizSection quizList= {quizList.items}/>
        <PaginationSimple
          currentPage={currentPage}
          goBackPage={goBackPage}
          goToNextPage={goToNextPage}
          limit={totalPages}
        />
        </>
        : 
        <>
          <p className='typography-p text-center mt-10'>Chưa có quiz. Bạn hãy tạo quiz của bạn</p>
        </>
      }
        </div>
        <div hidden={tabValue !== '2'} className="mt-4">
          <QuizHistory/>
        </div>
      </div>
    </div>
  )
}
