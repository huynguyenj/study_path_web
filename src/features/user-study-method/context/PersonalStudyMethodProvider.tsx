import { createContext, type PropsWithChildren } from 'react'
import usePersonalStudyMethod from '../hooks/usePersonalStudyMethod'
import type { StudyMethodType } from '../types/study-type'

type PersonalStudyMethodContextProps = {
   loading: boolean
   studyMethodPersonalId: string
   personalStudyMethod: StudyMethodType | undefined
   getPersonalStudyMethod: () => void
}

const PersonalStudyMethodContext = createContext<PersonalStudyMethodContextProps | undefined>(undefined)

export function PersonalStudyMethodProvider({ children }: PropsWithChildren) {
   const { loading, personalStudyMethod, getPersonalStudyMethod, studyMethodPersonalId } = usePersonalStudyMethod()
  return (
   <PersonalStudyMethodContext.Provider value={{ getPersonalStudyMethod, loading, personalStudyMethod, studyMethodPersonalId }}>
      {children}
   </PersonalStudyMethodContext.Provider>
  )
}

export default PersonalStudyMethodContext