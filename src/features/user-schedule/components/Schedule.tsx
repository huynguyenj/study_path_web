import useToggle from '@/hooks/state/useToggle'
import { getListDayOfWeekInSpecificMonth } from '@/utils/generateDayData'
import { useMemo, useState } from 'react'
import TaskModal from './TaskModal'
type ScheduleProps = {
   month: number
   year: number
   currentDay: number
}
export default function Schedule({ month, year, currentDay }: ScheduleProps) {
  const [choiceDate, setChoiceDate] = useState<Date>(new Date(year, month, currentDay))
  const listDaysOfWeek = useMemo(() => {
      return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  }, [])
  const { isToggle, handleToggle } = useToggle(false)
  const handleChoiceDate = (day: number | null) => {
      setChoiceDate(new Date(year, month, day ?? 0))
      handleToggle()
  }
  return (
    <div className='flex flex-col gap-8 mt-5'>
      <p className='typography-p text-center font-semibold'>Tháng {month + 1} {year}</p>
      <div>
            <div className='grid grid-cols-7 justify-items-center place-items-center'>
                  {listDaysOfWeek.map((day, index) => (
                        <p key={index} className='typography-p text-[#747373]'>{day}</p>
                  ))}
            </div>
            <div className='grid grid-cols-7 w-full justify-items-center place-items-center'>
                  {getListDayOfWeekInSpecificMonth(month, year).map((day, index) => (
                        <div key={index} className={`flex justify-center items-center py-3 w-8 h-8 rounded-full md:w-[50%] md:h-[4rem] lg:h-[6rem] mt-2 md:rounded-[10px] ${day == currentDay && 'bg-blue-400 text-white'} cursor-pointer`} onClick={() => handleChoiceDate(day)}>
                              {day && 
                              <p className='typography-p text-center'>{day}</p>
                              }
                        </div>
                  ))}
            </div>
      </div>
      {isToggle && 
           <TaskModal currentDate={choiceDate} onClose={handleToggle}/>
      }
    </div>
  )
}
