import IconContainer from '@/components/ui/container/IconContainer'
import type { StudyMethodType } from '../types/study-type'
import RecommendStudyCard from './ui/RecommendStudyCard'
import { WorkspacePremiumIcon } from '@/assets/icons/mui-icon'

type ResultMethodSectionProps = {
      result: StudyMethodType[]
}

export default function ResultMethodSection({ result }: ResultMethodSectionProps) {
  return (
    <div className=''>
      <div className='flex flex-col justify-center items-center gap-2 mb-5'>
            <IconContainer containerType='circle' icon={WorkspacePremiumIcon} size='md' variant='complete'/>
            <h3 className='typography-h3 text-center font-semibold'>Phương pháp học tập cá nhân</h3>
            <p className='typography-p text-center w-[50%] mx-auto text-[#747373]'>Dựa trên đánh giá của bạn, chúng tôi đã xác định phương pháp học tập hiệu quả nhất phù hợp với phong cách học tập và sở thích của bạn</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-black'>
            {result.map((data) => (
                  <RecommendStudyCard
                        key={data.id}
                        id={data.id}
                        name={data.name}
                        description={data.description}
                        difficulty={data.difficulty}
                        effectiveness={data.effectiveness}
                        timeInfo={data.timeInfo}
                        weight={data.weight}
                        pros={data.pros}
                        techniques={data.techniques}
                  />
            ))}
      </div>
    </div>
  )
}
