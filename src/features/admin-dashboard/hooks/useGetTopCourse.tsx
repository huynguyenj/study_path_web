import { useEffect, useState } from 'react'
import type { TopCourseType } from '../types/table-type'
import { topCourse } from '../tableData'

export default function useGetTopCourse() {
  const [topCourses, setTopCourses] = useState<TopCourseType[]>([])
  useEffect(() => {
      setTopCourses(topCourse)
  }, [])
  return {
      topCourses
  }
}
