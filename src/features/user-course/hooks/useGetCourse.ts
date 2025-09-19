import { useEffect, useState } from 'react'
import { courseBookData, courseCertData, courseListAllData, courseMentorData, courseOnlineData, courseToolData } from '../courseData'
import type { CourseType } from '../types/course-type'

export default function useGetCourse({ filter }: {filter:number}) {
  const [courseList, setCourseList] = useState<CourseType[]>([])
  useEffect(() => {
      switch (filter) {
            case 0: setCourseList(courseListAllData); break
            case 1: setCourseList(courseOnlineData); break
            case 2: setCourseList(courseToolData); break
            case 3: setCourseList(courseCertData); break
            case 4: setCourseList(courseBookData); break
            case 5: setCourseList(courseMentorData); break
            default: setCourseList(courseListAllData)
      }
  }, [filter])
  return {
      courseList
  }
}
