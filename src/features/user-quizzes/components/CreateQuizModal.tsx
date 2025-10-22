import { Input } from '@/components/ui/input/Input'
import { Select } from '@/components/ui/input/Select'
import Modal from '@/components/ui/popup/Modal'
import { QuizEnumType } from '../types/quiz.type.enum'
import Button from '@/components/ui/button/Button'
import useCreateQuiz from '../hooks/useCreateQuiz'
import LoadingScreen from '@/components/ui/loading/LoadingScreen'

type CreateQuizModalProps = {
  handleToggle: () => void
  refreshQuizData: () => void
}

export default function CreateQuizModal({ handleToggle, refreshQuizData }: CreateQuizModalProps) {
  const { handleSubmitQuiz, loading, errors } = useCreateQuiz(refreshQuizData)
  if (loading) {
      return <LoadingScreen/>
  }
  return (
    <Modal onClose={handleToggle} title='Tạo quiz'>
      <form onSubmit={handleSubmitQuiz} className='flex flex-col gap-8 mt-10'>
            <Input
                  name='name'
                  placeHolder='Tựa đề bài quiz'
                  size='md'
                  type='text'
                  variant='outline'
                  label='Tên bài quiz'
                  error={errors.name}
            />
             <Input
                  name='description'
                  placeHolder='Mô tả bài quiz gồm những gì.'
                  size='md'
                  type='text'
                  variant='outline'
                  label='Mô tả'
                  error={errors.description}
            />
            <div className='flex gap-3'>
                  <Input
                     name='time'
                     placeHolder='125'
                     size='md'
                     type='number'
                     variant='outline'
                     label='Tổng số phút'
                     error={errors.time}            
                  />
                  <Input
                     name='totalQuestion'
                     placeHolder='40'
                     size='md'
                     type='text'
                     variant='outline'
                     label='Tổng số câu hỏi'
                     error={errors.totalQuestion}
                  />
                   <Input
                     name='passScore'
                     placeHolder='5'
                     size='md'
                     type='text'
                     variant='outline'
                     label='Số điểm pass quiz'
                     error={errors.passScore}
                  />
                  <Input
                     name='totalPoints'
                     placeHolder='10'
                     size='md'
                     type='text'
                     variant='outline'
                     label='Số điểm'
                     error={errors.totalPoints}
                  />
            </div>
            <div className='flex flex-col gap-2'>
            <label htmlFor='type-selection'>Chọn độ khó cho bài quiz</label>
             <Select id='type-selection' name='type' size='md' variant='outline' options={[
                  { name: 'Dễ', value: QuizEnumType.BEGINNER },
                  { name: 'Vừa', value: QuizEnumType.INTERMEDIATE },
                  { name: 'Khó', value: QuizEnumType.ADVANCED }
             ]}
                  error={errors.type}
             />
            </div>
            <Button size='md' type='normal' variant='primary'>
                  Tạo
            </Button>
      </form>
    </Modal>
  )
}
