import { ArrowRightIcon, CheckCircleIcon } from '@/assets/icons/mui-icon'
import Button from '@/components/ui/button/Button'
import Modal from '@/components/ui/popup/Modal'
import Tag from '@/components/ui/tags/Tag'
import useGetTasksByCurrentDate from '../hooks/useGetTasksByCurrentDate'
import { useEffect } from 'react'
import { Input } from '@/components/ui/input/Input'
import useCreateTask from '../hooks/useCreateTask'
type TaskModalProps = {
   currentDate: Date
   onClose: () => void
}
export default function TaskModal({ currentDate, onClose }: TaskModalProps) {
  const { tasks, getTaskByDate } = useGetTasksByCurrentDate()
  const { errors, handleSubmitTask } = useCreateTask()
  useEffect(() => {
      getTaskByDate(currentDate)
  }, [currentDate])
  return (
      
            <Modal title='Tasks' onClose={onClose}>
                  <h4 className='typography-h4'>Danh sách tasks:</h4>
                  <div className='flex flex-2 flex-col gap-5'>
                        <div className='flex items-center gap-2'>
                              <form onSubmit={handleSubmitTask} className='flex gap-3 items-center'>
                                    <Button size='sm' type='normal' variant='primary'>
                                           Tạo task cho hôm nay
                                    </Button>
                                    <Input name='title' placeHolder='title' size='sm' type='text' variant='filled' error={errors.title}/>
                                    <Input name='description' placeHolder='Mô tả chi tiết' size='sm' type='text' variant='filled' error={errors.description}/>
                                    <Input name='amount' placeHolder='Số lượng task' size='sm' type='number' variant='filled' error={errors.amount}/>
                              </form>
                        </div>
                        {/* <Select name='sort' options={[
                              { name: 'newest', value: 'Mới nhất' },
                              { name: 'oldest', value: 'Cũ nhất' }
                        ]}
                              size='sm'
                              variant='rounded'
                        /> */}
                  </div>
                  <div>
                        {tasks.length > 0 ? tasks.map((task) => (
                              <div key={task.id} className='relative flex justify-between items-center mt-5'>
                                    <div className='flex flex-2 items-center justify-between pr-20'>
                                          <div>
                                                <p>{task.title}</p>
                                                <p>{task.description}</p>
                                          </div>
                                          <div className='flex items-center justify-between'>
                                                <p>{task.start_time}</p>
                                                <ArrowRightIcon/>
                                                <p>{task.end_time}</p>
                                          </div>
                                    </div>
                                    <Tag content={task.isCompleted ? 'Đã xong' : 'Chưa xong'} variant={task.isCompleted ? 'success': 'danger'}/>
                                    {!task.isCompleted && 
                                          <div className='ml-3'>
                                                <CheckCircleIcon sx={{ color:'#22C55E' }} />
                                          </div>
                                    }
                                     {task.isCompleted && 
                                          <div className='absolute w-full h-full flex flex-col justify-center gap-2'>
                                                {Array.from({ length: 3 }).map((_, index) => (
                                                      <div key={index} className='bg-black dark:bg-white border-1'></div>
                                                ))}
                                          </div>
                                    }
                              </div>
                        )) : <p className='typography-p text-gray-primary font-medium text-center'>Chưa có task! Bạn hãy tạo task</p>}
                  </div>
            </Modal>
  )
}
