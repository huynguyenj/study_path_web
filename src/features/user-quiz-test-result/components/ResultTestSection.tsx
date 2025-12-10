import Button from '@/components/ui/button/Button'
import useGetResult from '../hooks/useGetResult'
import { useNavigate, useParams } from 'react-router'
import { PRIVATE_PATH } from '@/const/router/access-path'
// import { getTimeFromDate } from '@/utils/timeHelper'
import LoadingScreen from '@/components/ui/loading/LoadingScreen'

export default function ResultTestSection() {
   const { id } = useParams()
  const { result, loading } = useGetResult({ resultId: id })
  const navigate = useNavigate()
  if (loading) {
      return <LoadingScreen/>
  }

  const colorOfPoint = (percentCorrect: number) => {
      if (percentCorrect > 80) {
        return 'bg-[#D4F9D4] text-green-600'
      } else if ( percentCorrect < 80 && percentCorrect > 50) {
        return 'bg-[#fdffcd] text-amber-500'
      } else {
        return 'bg-[#ffcab0] text-red-500'    
      }
  }

  return (
    <div className='flex gap-50 justify-between mx-auto px-6 py-10 shadow-[0px_0px_12px_0px_rgba(0,0,0,0.2)] dark:shadow-[0px_0px_12px_0px_rgba(255,255,255,0.3)]'>
      {result ? 
      <>
            <div>
                  <div>
                        <h3 className='typography-h3 font-semibold'>{result?.quizName}</h3>
                        <p>Số điểm của bạn: {result?.point} / {result?.totalPoints}</p>
                        {/* <p>Thời gian: {getTimeFromDate(new Date(result.startAt))} - {getTimeFromDate(new Date(result.finishAt))}</p> */}
                  </div>       
                  <div className='mt-5'>
                        <p className='typography-p font-semibold'>Câu trả lời</p>
                        <div className='flex gap-4'>
                              <p>Số câu đúng: <span className='bg-gray-300 dark:bg-purple-500 rounded-full p-2'>{Math.round((result.accuracy/100)*result.totalQuestion)}</span></p>
                              <p>Số câu sai: <span className='bg-gray-300 dark:bg-purple-500 rounded-full p-2'>{Math.round(result.totalQuestion - (result.accuracy/100)*result.totalQuestion)}</span></p>
                        </div>
                         <div className='mt-5'>
                              <Button type='normal' size='md' variant='inactive' onClick={() => navigate(PRIVATE_PATH.USER.QUIZZES)}>
                                    Quay lại trang quiz
                              </Button>
                         </div>
                  </div>
            </div>
            <div className={`relative flex justify-center items-center h-30 w-30 rounded-full ${colorOfPoint(result.accuracy)}`}>
                  <div>
                        <h3 className='typography-h3 font-semibold'>{(result.accuracy)}%</h3>
                  </div>
            </div>
           
      </>
      : 
       <div className='flex flex-col justify-center gap-5'>
            <p className='typography-p text-center'>Xảy ra lỗi trong quá trình lấy kết quả. Hãy quay lại trang quiz để xem kết quả.</p>
               <Button type='normal' size='md' variant='inactive' onClick={() => navigate(PRIVATE_PATH.USER.QUIZZES)}>
                   Quay lại trang quiz
               </Button>
       </div>
      }
    </div>
  )
}
