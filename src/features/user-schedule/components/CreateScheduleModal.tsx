import { AddIcon, CloseIcon } from '@/assets/icons/mui-icon'
import { useRef, useState, type ChangeEvent } from 'react'
import type { CreateScheduleType, SubjectType } from '../types/schedule-type'
import { TAG_COLOR } from '../const/tag-color'
import useFormCheck from '@/hooks/component-hooks/useFormCheck'
import Modal from '@/components/ui/popup/Modal'
import { Input } from '@/components/ui/input/Input'
import DateInput from '@/components/ui/input/DateInput'
import Button from '@/components/ui/button/Button'
import Tag from '@/components/ui/tags/Tag'
import { Select } from '@/components/ui/input/Select'
import useCreateSchedule from '../hooks/useCreateSchedule'
import LoadingScreen from '@/components/ui/loading/LoadingScreen'
import { toast } from 'react-toastify'

type CreateScheduleModalProps = {
  onRefresh: () => void
  onClose: () => void
}

export default function CreateScheduleModal({ onClose, onRefresh }: CreateScheduleModalProps) {
  const [listSubject, setListSubject] = useState<Omit<SubjectType, 'id'>[]>([])
  const [errorSubject, setErrorSubject] = useState<string>()
  const { errors, validate: isValid } = useFormCheck<CreateScheduleType>()
  const { handleSubmitSchedule, isLoading } = useCreateSchedule()
  const subjectInputRef = useRef<HTMLInputElement>(null)
  const selectInputRef = useRef<HTMLSelectElement>(null)
  const addSubjectToList = () => {
      if (subjectInputRef.current && selectInputRef.current) {
            const subject: Omit<SubjectType, 'id'> = {
                   name:subjectInputRef.current.value,
                   priority: selectInputRef.current.value
            }
      setListSubject((prev) => [...prev, subject])
      }
  }
  const removeSubject = (index: number) => {
      const newUpdateList =listSubject.filter((_, itemIndex) => itemIndex !== index )
      setListSubject(newUpdateList)
  }

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault()
      const form = new FormData(e.currentTarget)
      const startDate = form.get('startDate') ? new Date(form.get('startDate') as string) : new Date()
      const now = new Date()
      if (startDate.getDate() === now.getDate()) {
        toast.error('Hãy chọn ngày hôm sau để bắt đầu')
        return
      }
      const endDate = form.get('endDate') ? new Date(form.get('endDate') as string) : new Date()
      const data: CreateScheduleType = {
            amountSubject: listSubject.length,
            totalTime: form.get('totalTime') as string,
            startDate: startDate,
            endDate: endDate,
            createAt: startDate,
            title: form.get('title') as string,
            subjectListRequest: listSubject
      }
      if (listSubject.length > 0) {
            setErrorSubject(undefined)
      } else {
            setErrorSubject('Môn học cần ít nhất là 1 môn')
      }
      if (isValid(data, { title: '', totalTime: '' }) && !errorSubject) {
            await handleSubmitSchedule(data)
            onRefresh()
      }
  }

  if (isLoading) {
    return <LoadingScreen/>
  }
  return (  
     <Modal title='Tạo lịch học' onClose={onClose}>
      <form onSubmit={handleSubmit} className='mt-8 flex flex-col gap-5'>
            <div className='flex flex-col gap-7'>
                  <Input label='Tên' name='title' placeHolder='Tên' size='md' type='text' variant='outline' error={errors.title}/>
                  <Input label='Tổng thời gian' name='totalTime' placeHolder='Tổng thời gian' size='md' type='text' variant='outline' error={errors.totalTime}/>
                  <DateInput minDate={new Date()} label='Thời gian bắt đầu' name='startDate'/>
                  <DateInput minDate={new Date()} label='Thời gian kết thúc' name='endDate'/>
            </div>
            <div className='flex items-center gap-2 mt-3'>
            <Input ref={subjectInputRef} label='Tên môn học' name='name' placeHolder='Tên môn học' size='md' type='text' variant='outline'/>
                  <Select ref={selectInputRef} name='priority' options={[
                        { name: 'high', value: 'high' }, 
                        { name: 'medium', value: 'medium' }, 
                        { name: 'low', value: 'low' }]}
                        size='md'
                        variant='outline'
                  />
                  <div className='rounded-full bg-gray-300 p-2' onClick={addSubjectToList}>
                        <AddIcon/>
                  </div>
                  {errorSubject && <p className='text-red-500 font-bold'>{errorSubject}</p>}
            </div>
      {listSubject.length > 0 && 
            <div className='flex gap-2'>
                  {listSubject.map((item, index) => (
                  <div key={index} className='relative w-fit cursor-pointer group flex gap-2 items-center'>
                        <div className='group-hover:-translate-x-8 transition-all duration-200 ease-in-out'>
                              <Tag content={item.name} variant={TAG_COLOR[item.priority]} key={index}/>
                        </div>
                        <div className='absolute right-0 -z-10 -translate-x-0 group-hover:z-0 transition-all duration-300 ease-in-out' onClick={() => removeSubject(index)}>
                              <CloseIcon/>
                         </div>
                  </div>
                  
            ))}
            </div>
      }
            <Button size='md' type='normal' variant='primary'>
                  Tạo
            </Button>
      </form>

     </Modal>
  )
}
