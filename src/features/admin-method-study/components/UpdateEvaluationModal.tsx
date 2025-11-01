import Modal from '@/components/ui/popup/Modal'
import useGetAdminEvaluationDetail from '../hooks/useGetEvaluationDetail'
import { useEffect, useState, type ChangeEvent } from 'react'
import { Input } from '@/components/ui/input/Input'
import CircularProgress from '@mui/material/CircularProgress'
import { ArrowDropDownIcon } from '@/assets/icons/mui-icon'
import Button from '@/components/ui/button/Button'
import useFormCheck from '@/hooks/component-hooks/useFormCheck'
import type { UpdateEvaluation } from '../types/evaluation-data-type'

type UpdateEvaluationModalProps = {
   onClose: () => void
   evaluationId: string
}

export default function UpdateEvaluationModal({ onClose, evaluationId }: UpdateEvaluationModalProps) {
  const { evaluationDetail, fetchEvaluationDetail, loading, updateEvaluation } = useGetAdminEvaluationDetail()
  const [questionChoiceId, setQuestionChoiceId] = useState<string>()
  const { errors, validate } = useFormCheck<UpdateEvaluation>()
  useEffect(() => {
      fetchEvaluationDetail(evaluationId)
  }, [evaluationId])
  const handleDropDown = (questionId: string) => {
      if (questionId === questionChoiceId) {
        setQuestionChoiceId('')
      } else {
        setQuestionChoiceId(questionId)
      }
  }

  const handleSubmitUpdate = async (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault()
      const form = new FormData(e.currentTarget)
      const updatedData: UpdateEvaluation = {
        name: form.get('name') as string,
        description: form.get('description') as string
      }
      if (validate(updatedData, { name: '', description: '' })) {
        await updateEvaluation(evaluationId, updatedData)
      }
  }

  return (
    <Modal title='Thông tin đánh giá' onClose={onClose}>
      {loading ? 
        <div className='flex justify-center items-center'>
            <CircularProgress/>
        </div>
        :
        <>
            <form onSubmit={handleSubmitUpdate} className='mt-8 flex flex-col gap-8'>
                  <Input defaultValue={evaluationDetail?.name} label='Tựa đề' name='name' size='md' type='text' variant='rounded' error={errors.name}/> 
                  <Input defaultValue={evaluationDetail?.description} label='Mô tả' name='description' size='md' type='text' variant='rounded' error={errors.description}/> 
                  
            <Button size='md' type='normal' variant='primary'>
                  Lưu
            </Button>
            </form>
            <div className='mt-5'>
                  {evaluationDetail?.evaluationQuestions.map((question) => (
                        <div key={question.id}>
                              <div className='flex gap-2'>
                                    <p>{question.title}</p>
                                    <p>{question.type}</p>
                              </div>
                              <div className='flex gap-3'>
                                    <Button size='circle' type='rounded' variant='secondary' onClick={() => handleDropDown(question.id)}>
                                          <ArrowDropDownIcon/>
                                    </Button>
                                    <div className={`${questionChoiceId === question.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 ease-in-out my-2`}>
                                          {question.choices.map((choice) => (
                                                <p className='typography-p' key={choice.id}>Câu trả lời: {choice.title}</p>
                                          ))}
                                    </div>
                              </div>

                        </div>
                  ))}
            </div>
        </>
      }
    </Modal>
  )
}
