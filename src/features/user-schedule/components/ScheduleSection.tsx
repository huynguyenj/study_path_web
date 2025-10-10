import { useState } from 'react'
import Schedule from './Schedule'
import type { Dayjs } from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'

export default function ScheduleSection() {
  const [date, setDate] = useState<Dayjs | null>(dayjs())
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
                        <Schedule 
                              month={date?.month ? date.month() : dayjs().month()} 
                              year={date?.year ? date.year() : dayjs().year()} 
                              currentDay={date?.date ? date.date() : dayjs().date()}/>
                
            </div>
      </div>
  )
}
