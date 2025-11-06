import PaginationSimple from '@/components/pagination/PaginationSimple'
import LoadingScreen from '@/components/ui/loading/LoadingScreen'
import QuizCard from '@/features/user-quizzes/components/QuizCard'
import QuizHeader from '@/features/user-quizzes/components/QuizHeader'
import QuizHistory from '@/features/user-quizzes/components/QuizHistory'
import QuizStatistic from '@/features/user-quizzes/components/QuizStatistic'
import useGetQuizStatistic from '@/features/user-quizzes/hooks/useGetQuizStatistic'
import useQuizContext from '@/features/user-quizzes/hooks/useQuizContext'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { useState } from 'react'


export default function QuizSection() {
  const [tabValue, setTabValue] = useState('1')
  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue)
  }
  const { quizStatistic } = useGetQuizStatistic()
  const context = useQuizContext()

  if (context.loading) {
    return <LoadingScreen/>
  }
  return (
    <div className='mb-5'>
      <QuizHeader />
      {quizStatistic && 
        <QuizStatistic quizStatisticData={quizStatistic}/>
      }
      <div className='mt-5'>
        <Tabs
          value={tabValue}
          onChange={handleChange}
        >
          <Tab label='Danh sách bài kiểm tra đã tạo' value='1' sx={{ color: '#747373' }}/>
          <Tab label='Lịch sử bài kiểm tra đã làm' value='2' sx={{ color: '#747373' }}/>
        </Tabs>
        <div hidden={tabValue !== '1'} className="mt-4 flex flex-col gap-5">
        { tabValue === '1' && context.quizList ? 
        <>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5'>
          {context.quizList.items.map((quiz) => (
                <QuizCard key={quiz.id} data={quiz}/>
          ))}
        </div>
        <PaginationSimple
          currentPage={context.currentPage}
          goBackPage={context.goBackPage}
          goToNextPage={context.goToNextPage}
          limit={context.totalPages}
        />
        </>
        : 
        <>
          <p className='typography-p text-center mt-10'>Chưa có quiz. Bạn hãy tạo quiz của bạn</p>
        </>
      }
        </div>
        <div hidden={tabValue !== '2'} className="mt-4">
          { tabValue === '2' && 
            <QuizHistory/>
          }
        </div>
      </div>
    </div>
  )
}
