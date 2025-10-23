import { ArrowRightIcon, CheckCircleIcon } from '@/assets/icons/mui-icon'
import Button from '@/components/ui/button/Button'
import Modal from '@/components/ui/popup/Modal'
import Tag from '@/components/ui/tags/Tag'
import useGetTasksByCurrentDate from '../hooks/useGetTasksByCurrentDate'
import { useEffect, useMemo } from 'react'
import { Input } from '@/components/ui/input/Input'
import useCreateTask from '../hooks/useCreateTask'
import CircularProgress from '@mui/material/CircularProgress'
import LoadingScreen from '@/components/ui/loading/LoadingScreen'
import type { ProcessType } from '../types/schedule-type'
import useSubmitTask from '../hooks/useSubmitTask'
import { getTimeFromDate } from '@/utils/timeHelper'
import { formatDate } from '@/utils/formatDate'
import type { TaskType } from '../types/task-type'
import { toast } from 'react-toastify'
type TaskModalProps = {
   currentProcess: ProcessType
   onClose: () => void
}
export default function TaskModal({ currentProcess, onClose }: TaskModalProps) {
  const { tasks, getTaskByProcess, loading } = useGetTasksByCurrentDate()
  const { errors, handleSubmitTask, loading: loadingTask, tasks: newTasks } = useCreateTask(currentProcess.id)
  const { handleCompleteTask } = useSubmitTask()
  useEffect(() => {
      getTaskByProcess(currentProcess.id)
  }, [currentProcess, newTasks])

  const sortTasks = useMemo(() => {
      return [...tasks].sort((a, b) => {
        const timeA = new Date(a.startTime).getTime()
        const timeB = new Date(b.startTime).getTime()
        return timeA - timeB 
      })
  }, [tasks])

    if (loadingTask) {
      return <LoadingScreen/>
  }
  const handleTask = async (taskInfo: TaskType) => {
      const now = new Date()
      const taskDate = new Date(taskInfo.startTime)
      if (now.getDate() < taskDate.getDate()) {
        toast.error('Không thể hoàn thành task khi bạn đang ở hiện tại chứ không phải tương lai')
        return
      }
      await handleCompleteTask(taskInfo.id)
      getTaskByProcess(currentProcess.id)
  }
  return (
      
            <Modal title='Tasks' onClose={onClose}>
                  <p>Ngày: {formatDate(new Date(currentProcess.date))}</p>
                  <h4 className='typography-h4'>Danh sách môn hôm nay: {currentProcess.subjects.map((subject) => subject.name).join(', ')}</h4>    
                  <div>
                        {loading ? 
                        <div className='flex items-center justify-center mt-5'>
                              <CircularProgress/>
                        </div>
                              :
                        <>
                        {sortTasks.length > 0 ? sortTasks.map((task) => (
                              <div key={task.id} className='relative flex justify-between items-center mt-5'>
                                    <div className='flex flex-2 items-center justify-between pr-20'>
                                          <div>
                                                <p>{task.title}</p>
                                                <p>{task.description}</p>
                                          </div>
                                          <div className='flex items-center justify-between'>
                                                <p>{getTimeFromDate(new Date(task.startTime))}</p>
                                                <ArrowRightIcon/>
                                                <p>{getTimeFromDate(new Date(task.endTime))}</p>
                                          </div>
                                    </div>
                                    <Tag content={task.isCompleted ? 'Đã xong' : 'Chưa xong'} variant={task.isCompleted ? 'success': 'danger'}/>
                                    {!task.isCompleted && 
                                          <div className='ml-3' onClick={() => handleTask(task)}>
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
                        )) : <p className='typography-p text-gray-primary font-medium text-center p-10'>Chưa có task! Bạn hãy tạo task</p>}      
                        </>
                        }
                  </div>
                              <form onSubmit={handleSubmitTask} className='flex flex-col gap-3 items-center'>
                                    <div className='flex flex-col gap-2'>
                                          <Input name='title' placeHolder='title' size='sm' type='text' variant='outline' error={errors.title}/>
                                          <Input name='description' placeHolder='Mô tả chi tiết' size='sm' type='text' variant='outline' error={errors.description}/>
                                          <Input name='amount' placeHolder='Số lượng task' size='sm' type='number' variant='outline' error={errors.amount}/>
                                          <div className='flex gap-3 items-center'>
                                                <p>Giờ bạn muốn bắt đầu làm tasks</p>
                                                <Input name='hours' min={0} max={23} placeHolder='Giờ' size='sm' type='number' variant='outline' error={errors.amount}/>
                                                <Input name='minutes' min={0} max={59} placeHolder='Phút' size='sm' type='number' variant='outline' error={errors.amount}/>
                                          </div>
                                    </div>
                                       <Button size='sm' type='normal' variant='primary'>
                                           Tạo task cho hôm nay
                                    </Button>
                              </form>
            </Modal>
  )
}
