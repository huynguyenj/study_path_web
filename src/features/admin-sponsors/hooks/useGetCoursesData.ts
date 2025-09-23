import { useEffect, useState } from 'react'
import type { CourseType } from '../types/courses-type'
import { tableFakeCourses } from '../tableFakeCourses'

export default function useGetCoursesData() {
  const [coursesData, setCoursesData] = useState<CourseType[]>([])
  useEffect(() => {
    setCoursesData(tableFakeCourses)
  }, [])
  return {
    coursesData
  }
}
