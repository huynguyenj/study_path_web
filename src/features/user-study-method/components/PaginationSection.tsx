import Button from '@/components/ui/button/Button'
import { useContext } from 'react'
import StudyMethodContext from '../context/StudyMethodProvider'

export default function PaginationSection() {
  const context = useContext(StudyMethodContext)
  const limitPage = context?.limit
  const currentPage = context?.page
  return (
    <div className='flex items-center justify-between'>
      <Button size='md' variant='inactive' onClick={context?.goBackPage}>
        Trước
      </Button>
      <p>Bước {currentPage} trên {limitPage}</p>
      <Button size='md' variant='primary' onClick={context?.goToNextPage}>
        Tiếp theo
      </Button>
    </div>
  )
}
