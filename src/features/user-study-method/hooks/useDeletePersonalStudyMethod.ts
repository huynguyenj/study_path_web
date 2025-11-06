import { useState } from 'react'
import { StudyMethodApi } from '../api/api.study.method'
import { toast } from 'react-toastify'
import usePersonalStudyMethodContext from './usePersonalStudyMethodContext'

export default function useDeletePersonalStudyMethod() {
  const [loading, setLoading] = useState(false)
  const context = usePersonalStudyMethodContext()
  const handleDeletePersonalStudyMethod = async (studyMethodId: string) => {
      try {
        setLoading(true)
        await StudyMethodApi.deletePersonalStudyMethod(studyMethodId)
        toast.success('Xóa phương pháp học của bạn thành công!')    
        context.getPersonalStudyMethod()
      } catch (error) {
        console.log(error)
        toast.error('Xóa phương pháp học của bạn thất bại!')    
      } finally {
        setLoading(false)
      }
  }
  return {
      handleDeletePersonalStudyMethod,
      loading
  }
}
