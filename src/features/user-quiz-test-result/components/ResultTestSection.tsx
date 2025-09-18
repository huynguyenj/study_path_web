import Button from '@/components/ui/button/Button'
import useGetResult from '../hooks/useGetResult'
import { useNavigate } from 'react-router'
import { PRIVATE_PATH } from '@/const/router/access-path'

export default function ResultTestSection() {
  const { result } = useGetResult()
  const navigate = useNavigate()
  return (
    <div className='card w-[60%] flex justify-between mx-auto px-5 py-5'>
      {result ? 
      <>
            <div>
                  <div>
                        <h3 className='typography-h3 font-semibold'>{result?.quizName}</h3>
                        <p>Số điểm của bạn: {result?.points} / {result?.total_points}</p>
                        <p>Thời gian: {result?.startAt} - {result?.finishAt}</p>
                  </div>       
                  <div className='mt-5'>
                        <p className='typography-p font-semibold'>Câu trả lời</p>
                        <div className='flex gap-4'>
                              <p>Số câu đúng: <span className='bg-gray-300 w-7 h-7 rounded-full px-1'>{result?.numberCorrectQuestion}</span></p>
                              <p>Số câu sai: <span className='bg-gray-300 w-7 h-7 rounded-full px-1'>{result?.numberIncorrectQuestion}</span></p>
                        </div>
                         <div className='mt-5'>
                              <Button size='md' variant='inactive'  onClick={() => navigate(PRIVATE_PATH.USER.QUIZZES)}>
                                    Quay lại trang quiz
                              </Button>
                         </div>
                  </div>
            </div>
            <div className='relative flex justify-center items-center h-30 w-30 rounded-full bg-[#D4F9D4]'>
                  <div>
                        <h3 className='typography-h3 font-semibold text-green-600'>{(result?.numberCorrectQuestion / result?.total_questions) * 100}%</h3>
                  </div>
            </div>
           
      </>
      : 
      <p>Chưa có dữ liệu</p>
      }
    </div>
  )
}
