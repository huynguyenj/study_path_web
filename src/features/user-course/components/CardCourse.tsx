import { getVietNameCurrency } from '@/utils/getCurrency'
import type { CourseType } from '../types/course-type'
import { InfoIcon, StarIcon } from '@/assets/icons/mui-icon'
import Button from '@/components/ui/button/Button'

type CardCourseProps = {
      data: CourseType
}

export default function CardCourse({ data }: CardCourseProps) {
  return (
    <div className='card-course rounded-2xl flex flex-col'>
      <img src={data.image} alt="image-course" className='w-full h-60 rounded-t-2xl object-cover' loading='lazy' />
      <div className='flex flex-col typography-p px-4 py-3 gap-5'>
            <div className='flex justify-between items-center'>
                  <p className='font-bold text-[#1D4ED8]'>{data.organization}</p>
                  <div className='flex gap-2 items-center justify-center'>
                        <p className='font-bold flex items-center justify-center gap-1'>
                              <StarIcon sx={{ color: '#FFDD55' }}/>
                              {data.star}
                        </p>
                        <p className='text-[#747373] font-medium'>({data.reviews.toLocaleString()})</p>
                  </div>
            </div>
            <div className='h-25'>
                  <p className='typography-h4 font-semibold'>{data.title}</p>
                  <p className=''>{data.description.slice()}</p>
            </div>
            <div className='flex justify-between items-center'>
                  <h3 className='typography-h3 font-bold'>{getVietNameCurrency(data.price)}</h3>
                  <Button size='md' variant='primary'>
                        <InfoIcon/>
                  </Button>
            </div>
      </div>
    </div>
  )
}
