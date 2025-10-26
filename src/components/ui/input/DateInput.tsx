import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs'
import { useCallback, useMemo, useState } from 'react'

type DateInputProps = {
   name: string
   label: string
   colorChoice?: 'black' | 'white'
   minDate?: Date
   maxDate?: Date
}

export default function DateInput({ name, label, maxDate, minDate, colorChoice }: DateInputProps) {
  const [value, setValue] = useState<Dayjs | null>(dayjs(Date.now()))
  
  const theme = useMemo(() => {
    return document.documentElement.classList.contains('dark') ? 'white' : 'black'
  }, [])  
  
  const slotProps = useMemo(() => {
    return {
      textField: {
        InputLabelProps: {
          shrink: true,
          sx: {
            color: colorChoice ? colorChoice : theme,
            borderColor: theme,
            overflow: 'hidden'
          }
        },
        InputProps: {
          sx: {
            borderWidth: 1,
            color: colorChoice ? colorChoice : theme,
            borderColor: colorChoice ? colorChoice : theme,
             '& .MuiSvgIcon-root': { // Target the calendar icon
            color: colorChoice ? colorChoice : theme
          }
          }
        }
      }
    } 
  }, [theme, colorChoice])
  
  const datePickerCondition = useCallback(() => {
    const commonProps = {
      onChange: (newValue: Dayjs | null) => setValue(newValue),
      value,
      defaultValue: dayjs(Date.now()),
      format: 'DD/MM/YYYY',
      slotProps
    }
    
    if (minDate && maxDate) {
      return <DatePicker {...commonProps} minDate={dayjs(minDate)} maxDate={dayjs(maxDate)} />
    } else if (minDate) {
      return <DatePicker {...commonProps} minDate={dayjs(minDate)} />
    } else if (maxDate) {
      return <DatePicker {...commonProps} maxDate={dayjs(maxDate)} />
    } else {
      return <DatePicker {...commonProps} />
    }
  }, [value, minDate, maxDate, slotProps])
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className='flex flex-col'>
        <p className=''>{label}</p>
        {datePickerCondition()}
      </div>
      {/* Hidden input to capture date for FormData */}
      <input 
        type="hidden" 
        name={name} 
        value={value ? value.format('YYYY-MM-DD') : ''} 
      />
    </LocalizationProvider>
  )
}