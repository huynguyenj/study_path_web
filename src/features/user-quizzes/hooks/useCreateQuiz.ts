import useFormCheck from '@/hooks/component-hooks/useFormCheck'
import type { CreateQuizType } from '../types/quiz-type'
import { useState, type ChangeEvent } from 'react'
import { generateMinutesToTime } from '@/utils/timeHelper'
import useLocalStorage from '@/hooks/local-storage/useLocalStorage'
import type { LoginResponse } from '@/features/auth/types/login-type'
import { toast } from 'react-toastify'
import { QuizApi } from '../api/api.quiz'

export default function useCreateQuiz(refreshQuiz: () => void) {
  const { errors, validate } = useFormCheck<CreateQuizType>()
  const [loading, setLoading] = useState(false)
  const { getItem } = useLocalStorage('user-info')
  const handleSubmitQuiz = async (e: ChangeEvent<HTMLFormElement>) => {
      const userId = getItem<LoginResponse>()?.userId
      if (!userId) {
        toast.error('Hãy đăng nhập để tạo!')
        return
      }
      e.preventDefault()
      const form = new FormData(e.currentTarget)
      const data: CreateQuizType = {
        name: form.get('name') as string,
        description: form.get('description') as string,
        passScore: Number(form.get('passScore')),
        totalPoints: Number(form.get('totalPoints')),
        time: generateMinutesToTime(Number(form.get('time'))),
        totalQuestion: Number(form.get('totalQuestion')),
        type: form.get('type') as string,
        userId: userId
      }
      if (validate(data, { description: '', name: '', time: '', totalPoints: '', passScore: '', totalQuestion: '', type: '' })) {
        try {
          setLoading(true)  
          await QuizApi.createQuizByAi(data)
          refreshQuiz()
        } catch (error) {
          console.log(error)
          toast.error('Tạo quiz thất bại')  
        } finally {
          setLoading(false)
        }
      }
  }
  return {
      handleSubmitQuiz,
      errors,
      loading
  }
}
