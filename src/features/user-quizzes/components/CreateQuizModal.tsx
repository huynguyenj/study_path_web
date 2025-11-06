import { Input } from '@/components/ui/input/Input'
import { Select } from '@/components/ui/input/Select'
import Modal from '@/components/ui/popup/Modal'
import { QuizEnumType } from '../types/quiz.type.enum'
import Button from '@/components/ui/button/Button'
import useCreateQuiz from '../hooks/useCreateQuiz'
import LoadingScreen from '@/components/ui/loading/LoadingScreen'

type CreateQuizModalProps = {
  handleToggle: () => void
}

export default function CreateQuizModal({ handleToggle }: CreateQuizModalProps) {
  const { handleSubmitQuiz, loading, errors } = useCreateQuiz()
  if (loading) {
      return <LoadingScreen/>
  }
  return (
    <Modal onClose={handleToggle} title='Tạo quiz'>
      <form onSubmit={handleSubmitQuiz} className='flex flex-col gap-8 mt-10'>
            <Input
                  name='name'
                  placeHolder='Tựa đề bài kiểm tra'
                  size='md'
                  type='text'
                  variant='outline'
                  label='Tên bài kiểm tra'
                  error={errors.name}
            />
             <Input
                  name='description'
                  placeHolder='Mô tả bài kiểm tra gồm những gì.'
                  size='md'
                  type='text'
                  variant='outline'
                  label='Mô tả'
                  error={errors.description}
            />
            <div className='flex flex-col gap-8'>
              <div className='flex gap-3'>
                  <Input
                     name='time'
                     placeHolder='125'
                     size='md'
                     type='number'
                     min={0}
                     variant='outline'
                     label='Tổng số phút'
                     error={errors.time}            
                  />
                  <Input
                     name='totalQuestion'
                     placeHolder='40'
                     size='md'
                     type='number'
                     min={0}
                     variant='outline'
                     label='Tổng số câu hỏi'
                     error={errors.totalQuestion}
                  />
              </div>
              <div className='flex gap-2'>
                <div className='flex-1'>
                    <Input
                      name='passScore'
                      placeHolder='5'
                      size='md'
                      type='text'
                      variant='outline'
                      label='Số điểm để vượt qua bài kiểm tra'
                      error={errors.passScore}
                    />
                </div>
                <div className='flex-1'>
                    <Input
                      name='totalPoints'
                      placeHolder='10'
                      size='md'
                      type='number'
                      min={0}
                      variant='outline'
                      label='Số điểm tổng'
                      error={errors.totalPoints}
                    />
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
            <label htmlFor='type-selection'>Chọn độ khó cho bài kiểm tra</label>
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
