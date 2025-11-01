import useContextCheck from '@/hooks/context/useContextCheck'
import StudyMethodAdminContext from '../context/StudyMethodAdminProvider'

export default function useGetStudyMethodContext() {
  return useContextCheck({ context: StudyMethodAdminContext, contextName: 'Study method context' })
}
