import { getVietNameCurrency } from '@/utils/getCurrency'
import useGetRecentPayments from '../hooks/useGetRecentPayments'
import CircularProgress from '@mui/material/CircularProgress'
import { formatDate } from '@/utils/formatDate'
import PaginationSimple from '@/components/pagination/PaginationSimple'
import usePagination from '@/hooks/pagination/usePagination'
import { useEffect } from 'react'

export default function RecentMemberTable() {
  const { currentPage, goBackPage, goToNextPage, setTotalPages, totalPages } = usePagination()
  const { loading, recentPayments } = useGetRecentPayments(currentPage)
  useEffect(() => {
      if (recentPayments) {
              setTotalPages(recentPayments.totalPages)
      }
  }, [recentPayments])
  return (
    <div className='card flex flex-col px-8 py-7 rounded-2xl overflow-x-auto'>
      <h4 className='typography-h4 font-semibold text-[#6c6c80] text-center'>Thanh toán gần đây</h4>
      <table className='min-w-[800px] w-full mx-auto typography-p '>
            <thead className='border-b-1 border-gray-300'>
                  <tr>
                        <th className='text-start font-medium py-3'>User Id</th>
                        <th className='text-start font-medium'>MembershipId</th>
                        {/* <th className='text-start font-medium'>Type</th> */}
                        <th className='text-start font-medium'>Date</th>
                        <th className='text-start font-medium'>Amount</th>
                  </tr>
            </thead>
            <tbody>
                  {loading ? 
                        <tr className='my-10'>
                              <th colSpan={6}>
                                    <CircularProgress/>
                              </th>
                        </tr>
                        :
                        <>
                              {recentPayments?.items ? 
                                    <>
                                          {recentPayments.items.map((payment) => (
                                                <tr key={payment.id}>
                                                      <th className='text-start font-normal py-2'>{payment.userId}</th>
                                                      <th className='text-start font-normal'>{payment.memberShipPlanId}</th>
                                                      {/* <th className='text-start font-normal py-2'>{payment.}
                                                      </th> */}
                                                      <th className='text-start font-normal py-2'>{formatDate(new Date(payment.createAt))}</th>
                                                      <th className='text-start font-normal py-2'>{getVietNameCurrency(payment.amount)}</th>
                                                </tr>
                                          ))}
                                    </>
                                    :
                                    <tr>
                                          <th colSpan={6}>
                                                <p>Chưa có thanh toán nào gần đây</p>
                                          </th>
                                    </tr>
                        
                              }
                        </>
                  }
            </tbody>
      </table>
      <PaginationSimple
            currentPage={currentPage}
            goBackPage={goBackPage}
            goToNextPage={goToNextPage}
            limit={totalPages}
      />
    </div>
  )
}
