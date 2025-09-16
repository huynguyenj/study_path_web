import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
type DateInputProps = {
   name: string,
   label: string
}
export default function DateInput({ name, label }:DateInputProps) {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker name={name} label={label} defaultValue={dayjs(Date.now())} format='DD/MM/YYYY' />
    </LocalizationProvider>
  )
}
