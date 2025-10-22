import TableRowContainer from '@/components/ui/container/TableRowContainer'
import useGetCoursesData from '../hooks/useGetCoursesData'
import { getVietNameCurrency } from '@/utils/getCurrency'
import { MoreHorizIcon } from '@/assets/icons/mui-icon'
import PaginationSimple from '@/components/pagination/PaginationSimple'
import usePagination from '@/hooks/pagination/usePagination'
import TableHeader from './TableHeader'
import TableContainer from '@/components/ui/container/TableContainer'
import { useEffect } from 'react'

export default function CourseTableSection() {
  const { coursesData } = useGetCoursesData()
  const { currentPage, goBackPage, goToNextPage, totalPages, setTotalPages } = usePagination()
  useEffect(() => {
      setTotalPages(coursesData.length)
  }, [coursesData])
  return (
      <TableContainer>
      <TableHeader/>
            <div className='px-5 py-2 flex justify-between text-gray-primary font-medium'>
                  <p className='w-60'>Title</p>
                  <p className='w-20'>Organization</p>
                  <p className='w-50 text-center'>Review</p>
                  <p className='w-50 text-end'>Price</p>
                  <p className='w-10'></p>
            </div>
            {coursesData.map((course) => (
                  <TableRowContainer key={course.id}>
                        <div className='flex gap-2 items-center w-60'>
                              <img src={course.image} alt="course-img" loading='lazy' className='w-10 h-10 rounded-full object-cover' />
                              <p>{course.title}</p>
                        </div>
                        <p className='w-20'>{course.organization}</p>
                        <p className='w-50 text-center'>{course.reviews.toLocaleString()}</p>
                        <p className='w-50 text-end'>{getVietNameCurrency(course.price)}</p>
                        <div className='w-10'>
                              <MoreHorizIcon/>
                        </div>
                  </TableRowContainer>
            ))}
            <PaginationSimple 
                  currentPage={currentPage} 
                  limit={totalPages}
                  goBackPage={goBackPage} 
                  goToNextPage={goToNextPage} 
            />

      </TableContainer>
  )
}
