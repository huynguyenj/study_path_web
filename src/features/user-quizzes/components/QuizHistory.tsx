import Tag from '@/components/ui/tags/Tag'
import useGetQuizHistory from '../hooks/useGetQuizHistory'

export default function QuizHistory() {
  const { quizHistory } = useGetQuizHistory()
  return (
    <div className='card typography-p px-5 py-5 overflow-x-auto'>
      <table className='min-w-[800px] w-full typography-p'>
        <thead>
          <tr className='border-b-2'>
            <th className='text-start py-5'>Chi tiết</th>
            <th className='text-start py-5'>Số lượng câu đúng</th>
            <th className='text-start py-5'>Điểm</th>
            <th className='text-center py-5'>Status</th>
            <th className='text-center py-5'>Hoàn thành</th>
          </tr>
        </thead>
        <tbody>
          {quizHistory?.map((data) => (
            <tr>
              <td className='py-4 font-semibold'>{data.name}</td>
              <td className=''>
                <p className='font-semibold'>{(data.correctNumbers / data.totalQuestion)* 100}%</p>
                <p>{data.correctNumbers} / {data.totalQuestion} đúng</p>
              </td>
              <td className=''>
                <p className='flex items-center justify-center w-10 h-10 bg-blue-400 text-white rounded-full p-2'>{data.point}</p>
              </td>
              <td className='flex items-center justify-center py-3'>
                  <Tag content={data.point >= data.passScore ? 'Passed' : 'Failed' } variant={data.point >= data.passScore ? 'success' : 'danger'}/>
              </td>
              <td className='text-center'>{data.completeAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

