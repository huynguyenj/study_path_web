import { useState, type ChangeEvent } from 'react'
import useGetNewUserYearly from '../hooks/useGetNewUserYearly'
import CircularProgress from '@mui/material/CircularProgress'
import { BarChart } from '@mui/x-charts'
import { Input } from '@/components/ui/input/Input'

export default function AdminNewUserBarChart() {
  const [yearChoice, setYearChoice] = useState(String(new Date().getFullYear()))
  const { loading, newUserYearlyData } = useGetNewUserYearly(yearChoice)
  console.log(yearChoice)
  return (
 <div className=''>
      {loading ? 
            <div className='flex justify-center items-center mt-15'>
                  <CircularProgress/>
            </div>
            :
      <>
      {newUserYearlyData ? 
          <BarChart
            xAxis={[
                  { scaleType: 'band', data: newUserYearlyData.map((data) => {
                     return `Tháng ${data.month}`
                  }) }
            ]}
            yAxis={[
                  { width: 60 }
            ]}
            series={[
            {
              data: newUserYearlyData.map((data) => Number(data.newUser) ),
              label: 'Số lượng người dùng mới'
            },
            ]}
            height={350}
          />
        :
         <p className='typography-p text-center'>Chưa có dữ liệu</p>
      } 
      </>
      }
      <div className='w-20 mx-auto'>
            <Input type='number' size='md' variant='standard' name='year' defaultValue={yearChoice} onChange={(e: ChangeEvent<HTMLInputElement>) => setYearChoice(e.target.value)}/>
      </div>

    </div>
  )
}
