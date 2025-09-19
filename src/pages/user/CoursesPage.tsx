import CourseHeader from '@/features/user-course/components/CourseHeader'
import CourseSection from '@/features/user-course/components/CourseSection'

export default function CoursesPage() {
  return (
    <div className='flex flex-col gap- mb-5'>
      <CourseHeader/>
      <CourseSection/>
    </div>
  )
}
