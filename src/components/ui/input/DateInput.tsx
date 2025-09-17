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
      <DatePicker name={name} label={label} defaultValue={dayjs(Date.now())} format='DD/MM/YYYY' slotProps={{
        textField: {
                InputLabelProps: {
                      sx: {
                           color:'white',
                           borderColor:'white'
                      }
                  },
                InputProps: {
                      sx: {
                           borderWidth: 1,
                           color:'white',
                           borderColor:'white'
                       }
                 }
          }
      }}/>
    </LocalizationProvider>
  )
}
