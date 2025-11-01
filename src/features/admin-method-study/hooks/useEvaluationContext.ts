import useContextCheck from '@/hooks/context/useContextCheck'
import EvaluationContext from '../context/EvaluationProvider'

export default function useEvaluationContext() {
  return useContextCheck({ context: EvaluationContext, contextName: 'Evaluation context' })
}
