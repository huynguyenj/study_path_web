import Button from '@/components/ui/button/Button'
import { useContext } from 'react'
import StudyMethodContext from '../context/StudyMethodProvider'
import useGetRecommendMethod from '../hooks/useGetRecommendMethod'

export default function PaginationSection() {
  const context = useContext(StudyMethodContext)
  const { getStudyMethodRecommend } = useGetRecommendMethod()
  const limitPage = context?.limit
  const currentPage = context?.page
  return (
    <div className='flex items-center justify-between'>
      <Button disable={false} type='normal' size='md' variant='inactive' onClick={context?.goBackPage}>
        Trước
      </Button>
      <p>Bước {currentPage} trên {limitPage}</p>
      {currentPage === limitPage ? 
        <Button disable={false} type='normal' size='sm' variant='primary' onClick={() => getStudyMethodRecommend(context?.answer)}>
          Nhận kết quả gợi ý
        </Button>:
        <Button disable={false} type='normal' size='md' variant='primary' onClick={context?.goToNextPage}>
          Tiếp theo
        </Button>
      }
    </div>
  )
}
