import { getVietNameCurrency } from '@/utils/getCurrency'
import useGetDataTable from '../hooks/useGetDataTable'

export default function RecentMemberTable() {
  const { membershipData } = useGetDataTable()
  return (
    <div className='card lg:w-[60%] flex flex-col px-8 py-7 rounded-2xl overflow-x-auto ]'>
      <h4 className='typography-h4 font-semibold text-[#6c6c80] text-center'>Recent Orders</h4>
      <table className='w-[650px] mx-auto typography-p '>
            <thead className='border-b-1 border-gray-300'>
                  <tr>
                        <th className='text-start font-medium py-3'>User Id</th>
                        <th className='text-start font-medium'>Membership</th>
                        <th className='text-start font-medium'>Type</th>
                        <th className='text-start font-medium'>Date</th>
                        <th className='text-start font-medium'>Amount</th>
                  </tr>
            </thead>
            <tbody>
                  {membershipData.map((data) => (
                        <tr key={data.membership}>
                              <th className='text-start font-normal py-2'>{data.userId}</th>
                              <th className='text-start font-normal'>{data.membership}</th>
                              <th className='text-start font-normal py-2'>{data.type}</th>
                              <th className='text-start font-normal py-2'>{data.date}</th>
                              <th className='text-start font-normal py-2'>{getVietNameCurrency(data.amount)}</th>
                        </tr>
                  ))}
            </tbody>
      </table>
    </div>
  )
}
