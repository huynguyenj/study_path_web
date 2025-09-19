import type { CourseType } from '../types/course-type'
import CardCourse from './CardCourse'
 
type CourseListSectionProps = {
      data: CourseType[]
}
export default function CourseListSection({ data }: CourseListSectionProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {data.map((course) => (
            <CardCourse data={course}/>
      ))}
    </div>
  )
}
