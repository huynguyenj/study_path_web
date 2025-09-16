import { useContext } from 'react'
import StudyMethodContext from '../context/StudyMethodProvider'
import QuestionSectionHeader from './ui/QuestionSectionHeader'
import QuestionList from './QuestionList'
import PaginationSection from './PaginationSection'

export default function QuestionSection() {
  const context = useContext(StudyMethodContext)
  return (
    <div className='card mt-10 px-5 py-8'>
      <div>
        <QuestionSectionHeader title={context?.questionIndexPage.title} sub={context?.questionIndexPage.description}/>
      </div>
      <div className='mt-10'>
        <QuestionList/>
      </div>
      <hr className='mt-10'/>
      <div className='mt-5'>
        <PaginationSection/>
      </div>
    </div>
  )
}
