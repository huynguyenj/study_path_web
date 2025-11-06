import { CheckCircleIcon } from '@/assets/icons/mui-icon'
import type { StudyMethodType } from '../types/study-type'
import Tag from '@/components/ui/tags/Tag'
import useDeletePersonalStudyMethod from '../hooks/useDeletePersonalStudyMethod'
import useToggle from '@/hooks/state/useToggle'
import Modal from '@/components/ui/popup/Modal'
import Button from '@/components/ui/button/Button'
import LoadingScreen from '@/components/ui/loading/LoadingScreen'

type StudyMethodCardProps = {
  studyMethodPersonalId: string
  data: StudyMethodType
}

export default function StudyMethodCard({ data, studyMethodPersonalId }: StudyMethodCardProps) {
  const { handleDeletePersonalStudyMethod, loading } = useDeletePersonalStudyMethod()
  const { handleToggle, isToggle } = useToggle(false)
  if (loading) {
   return <LoadingScreen/>
  }

  return (
    <div className='card'>
      <div className='bg-[#fdb44b] rounded-t-2xl p-5'>
            <h3 className='typography-h3 font-medium'>{data.name}</h3>
      </div>
      <div className='px-5 py-3'>
            <h4 className='typography-h4'>Mô tả: {data.description}</h4>
            <div className='flex flex-col gap-2 my-3'>
            <p className='font-semibold'>Kĩ thuật then chốt</p>
            {data.techniques?.map((data) => (
                  <div className='flex gap-2' key={data.id}>
                        <CheckCircleIcon sx={{ color:'green' }}/>
                        <p className='typography-p'>{data.name}</p>
                  </div>
            ))}
            </div>
            <div className='flex items-center gap-2'>
            <p className='font-semibold'>Những lợi ích</p>
                  {data.pros?.map((data) => (
                        <Tag content={data.pro} variant='primary' key={data.id}/>
                  ))}
            </div>
            <div className='mt-5'>
                  <Button size='md' type='normal' variant='primary' onClick={handleToggle}>
                        Xóa phương pháp học
                  </Button>
            </div>
      </div>
      {isToggle && 
            <Modal onClose={handleToggle} title='Xác nhận'>
                  <p>Bạn có chắc là bạn muốn xóa không?</p>
                  <div className='flex gap-2 mt-2 justify-end'>
                        <Button size='md' type='normal' variant='inactive' onClick={handleToggle}>
                            Không
                        </Button>
                        <Button size='md' type='normal' variant='primary' onClick={() => handleDeletePersonalStudyMethod(studyMethodPersonalId)}>
                            Có
                        </Button>
                  </div>
            </Modal>
      }
    </div>
  )
}
