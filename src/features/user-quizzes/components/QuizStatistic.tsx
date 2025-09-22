import { quizStatisticData } from '../statisticData'
import DashboardCard from '@/components/ui/cards/DashboardCard'
import { QUIZ_STATISTIC_COLOR, QUIZ_STATISTIC_ICON } from '../const/quiz-dashboard-custom'

export default function QuizStatistic() {
  return (
    <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:flex mt-5 justify-between gap-5'>
      {quizStatisticData.map((data, index) => (
            <DashboardCard key={data.title} data={data.number} title={data.title} icon={QUIZ_STATISTIC_ICON[index]} variant={QUIZ_STATISTIC_COLOR[index]}/>
      ))}
    </div>
  )
}
