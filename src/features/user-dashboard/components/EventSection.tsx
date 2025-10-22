import type { SubjectFutureType } from '../types/dashboard-statistic-type'
import EventLabel from './EventLabel'

type EventSectionProps = {
  event: SubjectFutureType[]
}

export default function EventSection({ event }: EventSectionProps) {
  return (
   <div className='lg:w-[38%] flex flex-col gap-5 card rounded-[5px] px-5 py-5'>
            <h3 className='typography-h3 font-semibold'>Các môn học của lịch này</h3>
            {event.length > 0 ?
              <>
              {event.map((e) => (
                <EventLabel key={e.id} title={e.name} sub={e.priority}/>
              ))}
              </>
              :
              <p className='typography-p text-center p-3'>Chưa có môn học nào được tạo</p>
            }
      </div>
  )
}
