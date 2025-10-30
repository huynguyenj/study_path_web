import useContextCheck from '@/hooks/context/useContextCheck'
import AdminFeatureContext from '../context/AdminFeatureProvider'

export default function useFeatureContext() {
  return useContextCheck({ context: AdminFeatureContext, contextName: 'Admin feature context' })
}
