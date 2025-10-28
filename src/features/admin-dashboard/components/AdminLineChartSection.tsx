import { useState, type ChangeEvent } from 'react'
import useGetRevenueByYear from '../hooks/useGetRevenueByYear'
import CircularProgress from '@mui/material/CircularProgress'
import { LineChart } from '@mui/x-charts'
import { getVietNameCurrency } from '@/utils/getCurrency'
import { Select } from '@/components/ui/input/Select'

export default function AdminLineChartSection() {
  const [year, setYear] = useState(2025)
  const { loading, revenueInYearData } = useGetRevenueByYear(year)
  return (
  <div className='card px-5 py-7 min-w-[250px]'>
        <Select
            variant='rounded'
            size='md'
            name='year'
            options={[
                  { name: 2025, value: 2025 },
                  { name: 2024, value: 2024 }
            ]}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setYear(Number(e.currentTarget.value))}
       />
       <h4 className='font-semibold typography-h4 text-[#6c6c80] mt-3'>Doanh thu</h4>
       {loading ? 
            <div className='flex justify-center py-10'>
                  <CircularProgress/>
            </div>
            :
            <LineChart
                 xAxis={[
                       { scaleType: 'point', data: revenueInYearData.map((data) => `T-${data.month}`) }
                 ]}
                 yAxis={[
                       { width: 70 }
                 ]}
                 series={[
                       {
                         data: revenueInYearData.map((data) => data.totalAmount),
                         valueFormatter: (value) =>
                             value !== null && value !== undefined
                             ? getVietNameCurrency(value as number)
                             : '0'
                       }
                 ]}
                 height={380}
                 className='w-[100%]'
            />
           
       }
     
      </div>
  )
}
