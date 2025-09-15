import { useContext } from 'react'
import StudyMethodContext from '../context/StudyMethodProvider'
import IconContainer from '@/components/ui/container/IconContainer'
import { ICON_QUESTION_SECTION } from '../const/icon-context'

export default function IconProcessSection() {
  const context = useContext(StudyMethodContext)
  const currentPage = context?.page ? context.page : 0
  return (
    <div className='flex gap-2 justify-center mt-5'>
      {context?.questionSectionList.map((section, index) => (
        <div key={section.id} className='flex flex-col w-30 gap-2 justify-center items-center'>
            <IconContainer icon={ICON_QUESTION_SECTION[index]} containerType='circle' size='sm' variant={getBackgroundColorOnPage(index + 1, currentPage)}/>
            <p className='typography-p text-center'>{section.title}</p>
        </div>
      ))}     
    </div>
  )
}

const getBackgroundColorOnPage = (currentIndex:number, currentPage: number) => {
  if (currentIndex < currentPage) {
    return 'complete'
  } else if (currentIndex > currentPage) { 
    return 'inactive'
  } else {
    return 'primary'
  }
}