import useContextCheck from '@/hooks/context/useContextCheck'
import PersonalStudyMethodContext from '../context/PersonalStudyMethodProvider'

export default function usePersonalStudyMethodContext() {
  return useContextCheck({ context: PersonalStudyMethodContext, contextName: 'Personal Study method context' })
}
