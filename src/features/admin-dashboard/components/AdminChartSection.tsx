import useGetChart from '../hooks/useGetChart'
import { LineChart } from '@mui/x-charts/LineChart'
import { monthLabel } from '../const/line-chart'
import { getVietNameCurrency } from '@/utils/getCurrency'
import UserActiveAndSessionChartSection from './UserActiveAndSessionChartSection'
export default function AdminChartSection() {
  const { dataLineChart } = useGetChart()
  return (
    <div className='flex flex-col lg:flex-row gap-3'>
      <div className='card px-6 py-7 lg:w-[60%] min-w-[250px]'>
       <h4 className='font-semibold typography-h4 text-[#6c6c80]'>Doanh thu</h4>
       <LineChart
            xAxis={[
                  { scaleType: 'point', data: monthLabel }
            ]}
            yAxis={[
                  { width: 70 }
            ]}
            series={[
                  {
                    data: dataLineChart,
                    valueFormatter: (value) =>
                        value !== null && value !== undefined
                        ? getVietNameCurrency(value as number)
                        : '0'
                  }
            ]}
            height={350}
            className='w-[100%]'
       />
      </div>
      <div className='relative flex flex-col gap-14 card px-6 py-7 lg:w-[40%]'>
       <h4 className='font-semibold typography-h4 text-[#6c6c80]'>Thông số phân tích người dùng</h4>
            <UserActiveAndSessionChartSection/>
      </div>
    </div>
  )
}
