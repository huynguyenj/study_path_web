// import { MoreHorizIcon } from '@/assets/icons/mui-icon'
import PaginationSimple from '@/components/pagination/PaginationSimple'
import TableRowContainer from '@/components/ui/container/TableRowContainer'
import usePagination from '@/hooks/pagination/usePagination'
import useGetUserData from '../hooks/useGetUserData'
import { formatDate } from '@/utils/formatDate'
import Tag from '@/components/ui/tags/Tag'
import TableUserHeader from './TableUserHeader'
import TableContainer from '@/components/ui/container/TableContainer'
import { useEffect } from 'react'
import LoadingScreen from '@/components/ui/loading/LoadingScreen'

export default function TableUserManagement() {
  const { currentPage, goBackPage, goToNextPage, totalPages, setTotalPages } = usePagination()
  const { users, loading } = useGetUserData(currentPage)
  
  useEffect(() => {
     if (users) {
           setTotalPages(users.items.length)
     }
  }, [currentPage])

  if (loading) {
    return <LoadingScreen/>
  }
  return (
      <TableContainer>
            <TableUserHeader/>
            <div className='px-5 py-2 flex justify-between text-gray-primary font-medium'>
                  {/* <p className='w-20'>UserID</p> */}
                  <p className='w-20'>Username</p>
                  <p className='w-30 text-center'>Create at</p>
                  <p className='w-30 text-end'>Update at</p>
                  <p className='w-40 text-center'>Status</p>
                  {/* <p className='w-10'></p> */}
            </div>
            {users ? 
            <>
                  {users.items.map((user) => (
                        <TableRowContainer key={user.id}>
                              {/* <p className='w-20'>{user.id}</p> */}
                              <p className='w-20'>{user.userName}</p>
                              <p className='w-30 text-center'>{formatDate(new Date(user.createdDate))}</p>
                              <p className='w-30 text-end'>{formatDate(new Date(user.updateDate))}</p>
                              <div className='w-40 text-center'><Tag content={user.isDeleted ? 'Đã bị xóa' : 'Đang hoạt động'} variant={user.isDeleted ? 'danger' : 'success'}/></div>
                              {/* <div className='w-10'>
                                    <MoreHorizIcon/>
                              </div> */}
                        </TableRowContainer>
                  ))}
            </>
            : 
            <p className='typography-p text-center mt-10'>Chưa có danh sách người dùng</p>
            }
            <PaginationSimple 
                  currentPage={currentPage} 
                  limit={totalPages}
                  goBackPage={goBackPage} 
                  goToNextPage={goToNextPage} 
            />
      </TableContainer>
  )
}
