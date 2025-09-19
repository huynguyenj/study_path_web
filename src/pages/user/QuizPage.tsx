import QuizHeader from '@/features/user-quizzes/components/QuizHeader'
import QuizHistory from '@/features/user-quizzes/components/QuizHistory'
import QuizSection from '@/features/user-quizzes/components/QuizSection'
import QuizStatistic from '@/features/user-quizzes/components/QuizStatistic'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { useState } from 'react'

export default function QuizPage() {
  const [tabValue, setTabValue] = useState('1')
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue)
  }

  return (
    <div className='mb-5'>
      <QuizHeader/>
      <QuizStatistic/>
      <div className='mt-5'>
        <Tabs
          value={tabValue}
          onChange={handleChange}
        >
          <Tab label='Danh sách quiz có sẵn' value='1' sx={{ color: '#747373' }}/>
          <Tab label='Lịch sử bài quiz' value='2' sx={{ color: '#747373' }}/>
        </Tabs>
        <div hidden={tabValue !== '1'} className="mt-4">
          <QuizSection />
        </div>
        <div hidden={tabValue !== '2'} className="mt-4">
          <QuizHistory/>
        </div>
      </div>
    </div>
  )
}
