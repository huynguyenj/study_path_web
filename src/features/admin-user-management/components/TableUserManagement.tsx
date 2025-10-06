import { MoreHorizIcon } from '@/assets/icons/mui-icon'
import PaginationSimple from '@/components/pagination/PaginationSimple'
import TableRowContainer from '@/components/ui/container/TableRowContainer'
import usePagination from '@/hooks/pagination/usePagination'
import useGetUserData from '../hooks/useGetUserData'
import { formatDate } from '@/utils/formatDate'
import Tag from '@/components/ui/tags/Tag'
import TableUserHeader from './TableUserHeader'
import TableContainer from '@/components/ui/container/TableContainer'

export default function TableUserManagement() {
  const { currentPage, goBackPage, goToNextPage, limit } = usePagination({ limit: 5 })
  const { users } = useGetUserData()
  return (
      <TableContainer>
            <TableUserHeader/>
            <div className='px-5 py-2 flex justify-between text-gray-primary font-medium'>
                  <p className='w-20'>UserID</p>
                  <p className='w-20'>Username</p>
                  <p className='w-30 text-center'>Create at</p>
                  <p className='w-30 text-end'>Update at</p>
                  <p className='w-30 text-start'>Role</p>
                  <p className='w-10'></p>
            </div>
            {users.map((user) => (
                  <TableRowContainer key={user.id}>
                        <p className='w-20'>{user.id}</p>
                        <p className='w-20'>{user.username}</p>
                        <p className='w-30 text-center'>{formatDate(new Date(user.createAt))}</p>
                        <p className='w-30 text-end'>{formatDate(new Date(user.updateAt))}</p>
                        <div className='w-30'><Tag content={user.roleName} variant={user.roleName === 'admin' ? 'danger' : 'success'}/></div>
                        <div className='w-10'>
                              <MoreHorizIcon/>
                        </div>
                  </TableRowContainer>
            ))}
            <PaginationSimple 
                  currentPage={currentPage} 
                  limit={limit}
                  goBackPage={goBackPage} 
                  goToNextPage={goToNextPage} 
            />
      </TableContainer>
  )
}
