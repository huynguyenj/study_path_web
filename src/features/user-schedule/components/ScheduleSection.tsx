import { useState } from 'react'
import Schedule from './Schedule'
import type { Dayjs } from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export default function ScheduleSection() {
  const [date, setDate] = useState<Dayjs | null>()
  return (
      <div className='px-10 py-8 mt-8 card'>
            <div className='card w-fit mb-5'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker name='Schedule' label='Schedule date' format='DD/MM/YYYY' onChange={(newValue) => setDate(newValue)} slotProps={{
                        textField: {
                              InputLabelProps: {
                                    sx:{
                                          mixBlendMode:'difference',
                                          color:'white'
                                    }
                              },
                              InputProps: {
                                    sx: {
                                          fontWeight: 'bold',
                                          backgroundColor:' #ececec',
                                          border: 'none'
                               }
                                   
                        }
                  }
  }}/>
            </LocalizationProvider>
            </div>
            <div>
                  {date ? 
                        <Schedule month={date.month()} year={date.year()} currentDay={date.date()}/>
                        :
                        <p className='text-center typography-p text-[#747373]'>Hãy chọn ngày cụ thể</p>
                  }
            </div>
      </div>
  )
}
