import Tag from '@/components/ui/tags/Tag'
import useGetQuizHistory from '../hooks/useGetQuizHistory'
import usePagination from '@/hooks/pagination/usePagination'
import { useEffect } from 'react'
import PaginationSimple from '@/components/pagination/PaginationSimple'
import { getTimeFromDate } from '@/utils/timeHelper'
import CircularProgress from '@mui/material/CircularProgress'

export default function QuizHistory() {
  const { currentPage, goBackPage, goToNextPage, setTotalPages, totalPages } = usePagination()
  const { quizHistory, loading } = useGetQuizHistory(currentPage)
  
  useEffect(() => {
    if (quizHistory) {
      setTotalPages(quizHistory.totalPages)
    }
  }, [quizHistory])
  
  return (
    <div className='card typography-p px-5 py-5 overflow-x-auto'>
      <table className='min-w-[800px] w-full typography-p'>
        <thead>
          <tr className='border-b-2'>
            <th className='text-start py-5'>Quiz ID</th>
            <th className='text-start py-5'>Chi tiết</th>
            <th className='text-start py-5'>Số lượng câu đúng</th>
            <th className='text-start py-5'>Điểm</th>
            <th className='text-center py-5'>Status</th>
            <th className='text-center py-5'>Hoàn thành</th>
          </tr>
        </thead>
        
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={6} className='py-10'>
                <div className='flex justify-center'>
                  <CircularProgress />
                </div>
              </td>
            </tr>
          ) : (
            <>
              {quizHistory && quizHistory.items.length > 0 ? (
                quizHistory.items.map((data) => (
                  <tr key={data.id}>
                    <td className='py-4'>{data.quizId}</td>
                    <td className='py-4 font-semibold'>{data.quizName}</td>
                    <td>
                      <p className='font-semibold'>{data.accuracy}%</p>
                      <p>{data.point} / {data.totalPoints} đúng</p>
                    </td>
                    <td>
                      <div className='flex items-center justify-center w-10 h-10 bg-blue-400 text-white rounded-full p-2'>
                        {data.point}
                      </div>
                    </td>
                    <td>
                      <div className='flex items-center justify-center py-3'>
                        <Tag 
                          content={data.isPassed ? 'Passed' : 'Failed'} 
                          variant={data.point >= data.passScore ? 'success' : 'danger'}
                        />
                      </div>
                    </td>
                    <td className='text-center'>{getTimeFromDate(new Date(data.finishAt))}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className='text-center py-10'>
                    Chưa có lịch sử hãy làm bài quiz
                  </td>
                </tr>
              )}
            </>
          )}
        </tbody>
      </table>
      
      <div className='mt-5'>
        <PaginationSimple
          currentPage={currentPage}
          goBackPage={goBackPage}
          goToNextPage={goToNextPage}
          limit={totalPages}
        />
      </div>
    </div>
  )
}