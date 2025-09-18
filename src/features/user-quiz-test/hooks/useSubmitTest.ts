import { PRIVATE_PATH } from '@/const/router/access-path'
import { useNavigate } from 'react-router'

export default function useSubmitTest() {
  const navigate = useNavigate()
  const submitTest = () => {
      navigate(PRIVATE_PATH.TEST.RESULT_QUIZ)
  }
  return {
      submitTest
    }
}
