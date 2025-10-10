import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { useCallback, useMemo } from 'react'
type DateInputProps = {
   name: string
   label: string
   minDate?: Date
   maxDate?: Date
}
export default function DateInput({ name, label, maxDate, minDate }:DateInputProps) {
  const theme = useMemo(() => {
  return document.documentElement.classList.contains('dark') ? 'white' : 'black'
  }, [])  
  const slotProps = useMemo(() => {
    return {
        textField: {
                InputLabelProps: {
                      sx: {
                           color: theme,
                           borderColor:theme
                      }
                  },
                InputProps: {
                      sx: {
                           borderWidth: 1,
                           color: theme,
                           borderColor: theme
                       }
                 }
          }
      } 
  }, [theme])
  const datePickerCondition = useCallback(() => {
    if (minDate && maxDate) {
      return <DatePicker minDate={dayjs(minDate)} maxDate={dayjs(maxDate)} name={name} label={label} defaultValue={dayjs(Date.now())} format='DD/MM/YYYY' slotProps={slotProps}/>
    } else if (minDate) {
      return <DatePicker minDate={dayjs(minDate)} name={name} label={label} defaultValue={dayjs(Date.now())} format='DD/MM/YYYY' slotProps={slotProps}/>
    } else if (maxDate) {
      return <DatePicker maxDate={dayjs(maxDate)} name={name} label={label} defaultValue={dayjs(Date.now())} format='DD/MM/YYYY' slotProps={slotProps}/>
    } else {
      return <DatePicker name={name} label={label} defaultValue={dayjs(Date.now())} format='DD/MM/YYYY' slotProps={slotProps}/>
    }
  }, [])
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
     {datePickerCondition()}
    </LocalizationProvider>
  )
}
