import useGetTopCourse from '../hooks/useGetTopCourse'
import StarEvaluation from '@/components/ui/process/StarEvaluation'
import { getVietNameCurrency } from '@/utils/getCurrency'

export default function TopCourseSection() {
  const { topCourses } = useGetTopCourse()
  return (
    <div className='card px-10 py-7 lg:w-[40%]'>
      <h4 className='typography-h4 font-semibold text-[#6c6c80] mb-3'>Top enroll course</h4>
      <div>
            {topCourses.map((course) => (
                  <div className='flex items-center gap-3 mb-3'>
                        <img src={course.image} alt="course-img" className='w-25 h-25 rounded-2xl' />
                        <div className='flex flex-col gap-2'>
                              <p className='typography-p'>{course.name}</p>
                              <StarEvaluation dataNumber={course.star} limitStar={5}/>
                              <p className='typography-p font-semibold'>{getVietNameCurrency(course.price)}</p>
                        </div>
                  </div>
            ))}
      </div>
    </div>
  )
}
