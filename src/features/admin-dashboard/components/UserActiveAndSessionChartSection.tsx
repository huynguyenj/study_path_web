import { BarChart } from '@mui/x-charts'
import useGetActiveAndSessionData from '../hooks/useGetActiveAndSessionData'
import CircularProgress from '@mui/material/CircularProgress'

export default function UserActiveAndSessionChartSection() {
  const { loading, userActiveAndSessionDataDaily } = useGetActiveAndSessionData()
  return (
    <div className=''>
      {loading ? 
            <div>
                  <CircularProgress/>
            </div>
            :
      <>
      {userActiveAndSessionDataDaily ? 
          <BarChart
            xAxis={[
                  { scaleType: 'band', data: userActiveAndSessionDataDaily.data.map((data) => {
                     const date = data.date
                     const day = date.substring(date.length-2)   
                     const month = date.substring(4, 6)
                     return `${day}/${month}`
                  }) }
            ]}
            yAxis={[
                  { width: 60 }
            ]}
            series={[
            {
              data: userActiveAndSessionDataDaily.data.map(value => Number(value.values[0])),
              label: 'Số lượng truy cập'
            },
            {
              data: userActiveAndSessionDataDaily.data.map(value => Number(value.values[1])),
              label: 'Số lượng phiên hoạt động'
            },
            {
              data: userActiveAndSessionDataDaily.data.map(value => Number(value.values[2])),
              label: 'Số lượng event'
            }
            ]}
            height={350}
          />
        :
         <p className='typography-p text-center'>Chưa có dữ liệu</p>
      } 
      </>
      }
    </div>
  )
}
