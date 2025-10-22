import type { NearProcessTaskCompleteType } from '../types/dashboard-statistic-type'
import WorkLabel from './WorkLabel'

type ActivitySectionProps = {
  recentActive: NearProcessTaskCompleteType[]
}

export default function ActivitySection({ recentActive }: ActivitySectionProps) {
  return (
   <div className='lg:w-[60%] card rounded-[5px] px-5 py-5'>
          <h3 className='typography-h3 font-semibold'>Hoạt động gần đây</h3>
          <div className='flex flex-col gap-5 lg:px-5 mt-5'> 
          {recentActive.length > 0 ?
          <>
            {recentActive.map((process) => (
              <WorkLabel key={process.id} title={process.title} sub=''/>
            ))}
          </>
          :
          <p className='typography-p text-center p-5'>Chưa có hoạt động nào gần đây</p>
          } 
          </div>
        </div>
  )
}
