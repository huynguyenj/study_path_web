import { getListDayOfWeekInSpecificMonth } from '@/utils/generateDayData'
import { useMemo } from 'react'
type ScheduleProps = {
   month: number
   year: number
   currentDay: number
}


export default function Schedule({ month, year, currentDay }: ScheduleProps) {
  const listDaysOfWeek = useMemo(() => {
      return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  }, [])
  return (
    <div className='flex flex-col gap-8 mt-5'>
      <p className='typography-p text-center font-semibold'>Tháng {month + 1} {year}</p>
      <div>
            <div className='grid grid-cols-7 justify-items-center place-items-center'>
                  {listDaysOfWeek.map((day, index) => (
                        <p key={index} className='typography-p text-[#747373]'>{day}</p>
                  ))}
            </div>
            <div className='grid grid-cols-7 justify-items-center place-items-center'>
                  {getListDayOfWeekInSpecificMonth(month, year).map((day) => (
                        <div className={`flex justify-center items-center py-5 w-[60%] h-[6rem] mt-2 rounded-[10px] ${day == currentDay && 'bg-blue-400 text-white'}`}>
                              {day && 
                              <p className='typography-p text-center'>{day}</p>
                              }
                        </div>
                  ))}
            </div>
      </div>
    </div>
  )
}
