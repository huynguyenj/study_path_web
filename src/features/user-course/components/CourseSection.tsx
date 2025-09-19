import useFilterList from '../hooks/useFilterList'
import useGetCourse from '../hooks/useGetCourse'
import CourseFilterSection from './CourseFilterSection'
import CourseListSection from './CourseListSection'

export default function CourseSection() {
  const { currentListFilter, filterChoice, handleFilterChoice } = useFilterList()
  const { courseList } = useGetCourse({ filter: filterChoice })
  return (
    <div>
      <CourseFilterSection filterChoice={filterChoice} filterList={currentListFilter} selectFilter={handleFilterChoice}/>
      <CourseListSection data={courseList}/>
    </div>
  )
}
