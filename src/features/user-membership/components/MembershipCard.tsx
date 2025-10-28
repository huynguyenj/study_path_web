import type { MembershipDataType } from '../types/membership-data-type'
import Button from '@/components/ui/button/Button'
import { CheckCircleIcon } from '@/assets/icons/mui-icon'
import { getVietNameCurrency } from '@/utils/getCurrency'
import useGetPaymentUrl from '@/features/payments/hooks/useGetPaymentUrl'
import LoadingScreen from '@/components/ui/loading/LoadingScreen'
import { useEffect } from 'react'

type MembershipCardProps = {
  data: MembershipDataType
}

export default function MembershipCard({ data }: MembershipCardProps) {
  const { getPaymentUrl, loading, paymentUrlData } = useGetPaymentUrl()
  useEffect(() => {
    if (paymentUrlData) {
      window.location.href = paymentUrlData.checkoutUrl
    }
  }, [paymentUrlData])

  if (loading) {
    return <LoadingScreen/>
  }


  return (
    <div className='card px-10 py-10'>
      <h3 className='typography-h3 font-medium'>{data.name}</h3>
      <h2 className='typography-h2 font-bold'>{getVietNameCurrency(data.fee)} /<span className='typography-p font-normal text-gray-primary'>{data.duration}</span></h2>
      {data.features.map((feature) => (
         <div className='typography-p flex items-center'>
            <CheckCircleIcon/>
            <p>{feature.name}</p>
         </div>
      ))}
      <Button size='md' type='normal' variant='primary' onClick={() => getPaymentUrl(data.id)}>
            Chọn gói thành viên này
      </Button>
    </div>
  )
}
