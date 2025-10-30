import Card from '@/components/ui/cards/Card'
import type { StudyMethodType } from '../../types/study-type'
import { CheckCircleIcon } from '@/assets/icons/mui-icon'
import Tag from '@/components/ui/tags/Tag'
// import ProcessBar from '@/components/ui/process/ProcessBar'
// import StarEvaluation from '@/components/ui/process/StarEvaluation'
import Button from '@/components/ui/button/Button'
import useChoseStudyMethod from '../../hooks/useChoseStudyMethod'
import LoadingScreen from '@/components/ui/loading/LoadingScreen'
import { truncateText } from '@/utils/truncateText'
import Tooltip from '@mui/material/Tooltip'

export default function RecommendStudyCard({
      id, 
      name, 
      description, 
      difficulty, 
      // effectiveness, 
      timeInfo, 
      // weight, 
      pros, 
      techniques
}: StudyMethodType) {
  const { handleSubmitStudyMethod, isLoading } = useChoseStudyMethod()
  if (isLoading) {
      return <LoadingScreen/>
  }
  return (
   <Card variant='white' key={id}>
      <h3 className='typography-h3 font-semibold'>{name}</h3>
      <Tooltip title= {description}>
            <p className='typography-p'>{truncateText(description, 100)}</p>
      </Tooltip>
      {/* <div className='flex flex-col md:flex-row justify-between typography-p mt-3'>
            <p className='font-semibold'>Điểm khớp</p>
            <div className='flex md:w-[50%] items-center gap-2'>
                  <ProcessBar variant='success' percent={weight}/>
                  <p className='text-[#16A34A] font-semibold'>{weight}%</p>
            </div>
      </div> */}
      {/* <div className='flex flex-col md:flex-row justify-between typography-p mt-2'>
           <p className='font-semibold'>Hiệu quả</p>
           <div className='flex items-center gap-2'>
                  <StarEvaluation limitStar={5} dataNumber={effectiveness}/>
                  <p>{effectiveness}%</p>
            </div>
      </div> */}
      <div className='flex flex-col md:flex-row justify-between typography-p mt-5'>
            <div className='flex flex-col gap-1 w-[50%]'>
                  <p className='font-semibold'>Thời gian</p>
                  <p>{timeInfo}</p>
            </div>
             <div className='flex flex-col gap-1'>
                  <p className='font-semibold'>Độ khó</p>
                  <p>{difficulty}</p>
            </div>
      </div>
      <div className='flex flex-col gap-2 my-3'>
            <p className='font-semibold'>Kĩ thuật then chốt</p>
            {techniques?.map((data) => (
                  <div className='flex gap-2' key={data.id}>
                        <CheckCircleIcon sx={{ color:'green' }}/>
                        <p className='typography-p'>{data.name}</p>
                  </div>
            ))}
      </div>
        <div className='flex flex-col gap-2'>
            <p className='font-semibold'>Những lợi ích</p>
            {pros?.map((data) => (
                  <Tag content={data.pro} variant='primary' key={data.id}/>
            ))}
      </div>
      <div className='mt-5 flex items-center justify-center'>
            <Button disable={false} type='normal' size='md' variant='primary' onClick={() => handleSubmitStudyMethod(id)}>
                  Chọn phương pháp
            </Button>
      </div>
   </Card>
  )
}
