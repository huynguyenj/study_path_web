import { useEffect, useState } from 'react'
import { chartData, doughnutChartData } from '../fakeData'
import type { PieChartDataType } from '../types/chart-type'

export default function useGetChart() {
  const [dataLineChart, setDataLineChart] = useState<number[]>([])
  const [dataDoughnutChar, setDataDoughnutChar] = useState<PieChartDataType[]>([])
  useEffect(() => {
      setDataLineChart(chartData)
      setDataDoughnutChar(doughnutChartData)
  }, [])
  return {
      dataLineChart,
      dataDoughnutChar
  }
}
