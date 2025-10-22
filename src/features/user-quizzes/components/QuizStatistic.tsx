import DashboardCard from '@/components/ui/cards/DashboardCard'
import { QUIZ_STATISTIC_COLOR, QUIZ_STATISTIC_ICON } from '../const/quiz-dashboard-custom'
import type { QuizStatisticType } from '../types/quiz-statistic'

type QuizStatisticProps = {
  quizStatisticData: QuizStatisticType
}

export default function QuizStatistic({ quizStatisticData }: QuizStatisticProps) {
  return (
    <div className='grid xs:grid-cols-1 md:grid-cols-2 lg:flex mt-5 justify-between gap-5'>
            <DashboardCard data={quizStatisticData.totalCompleteQuiz} title='Số quiz đã làm' icon={QUIZ_STATISTIC_ICON[0]} variant={QUIZ_STATISTIC_COLOR[0]}/>
            <DashboardCard data={quizStatisticData.totalQuizPassed} title='Số lần thử đã pass' icon={QUIZ_STATISTIC_ICON[1]} variant={QUIZ_STATISTIC_COLOR[1]}/>
            <DashboardCard data={quizStatisticData.averageScore} title='Điểm trung bình' icon={QUIZ_STATISTIC_ICON[2]} variant={QUIZ_STATISTIC_COLOR[2]}/>
            {/* <DashboardCard data={(quizStatisticData.totalTime)} title='Thời gian đã làm' icon={QUIZ_STATISTIC_ICON[3]} variant={QUIZ_STATISTIC_COLOR[3]}/> */}
    </div>
  )
}
