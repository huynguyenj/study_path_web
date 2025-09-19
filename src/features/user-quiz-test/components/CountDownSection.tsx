import { AccessAlarmIcon } from '@/assets/icons/mui-icon'
import { countDownSecond, getMinutes, getSeconds } from '@/utils/countHelper'
import { useEffect, useState } from 'react'

type CountDownSectionProps = {
      totalSeconds: number
}

export default function CountDownSection({ totalSeconds }: CountDownSectionProps) {
  const [timeLeft, setTimeLeft] = useState<number>(countDownSecond(totalSeconds))
  useEffect(() => {
      if (timeLeft == 0 ) return
      const interval = setInterval(() => {
            setTimeLeft((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(interval)
  }, [timeLeft])
  return (
    <div className='flex items-center justify-center gap-2'>
      <AccessAlarmIcon/>
      <p className='typography-p'>{getMinutes(timeLeft)}:{getSeconds(timeLeft% 60)}</p>
    </div>
  )
}
