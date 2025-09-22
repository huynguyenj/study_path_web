import { useEffect, useState } from 'react'
import type { StatisticType } from '../types/statistic-type'
import { dataStatistic } from '../fakeData'

export default function useGetStatistics() {
  const [statistics, setStatistic] = useState<StatisticType[]>([])
  useEffect(() => {
      setStatistic(dataStatistic)
  }, [])
  return { statistics }
}
