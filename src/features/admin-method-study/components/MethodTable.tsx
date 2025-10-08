import useGetMethodData from '../hooks/useGetMethodData'
import TableRowContainer from '@/components/ui/container/TableRowContainer'
import Tag from '@/components/ui/tags/Tag'
import { COLOR_TAG } from '../const/color-tag'
import { AddIcon, MoreHorizIcon } from '@/assets/icons/mui-icon'
import PaginationSimple from '@/components/pagination/PaginationSimple'
import usePagination from '@/hooks/pagination/usePagination'
import Button from '@/components/ui/button/Button'
import TableContainer from '@/components/ui/container/TableContainer'

export default function MethodTable() {
  const { methodTableDatas } = useGetMethodData()
  const { currentPage, goBackPage, goToNextPage, limit } = usePagination({ limit: 5 })
  return (
      <TableContainer>
     
            <div className='flex justify-end'>
                  <Button type='normal' size='md' variant='primary'>
                        <AddIcon/>
                        Add new method
                  </Button>
            </div>
            <div className='px-5 py-2 flex justify-between text-gray-primary font-medium'>
                  <p className='w-20'>ID</p>
                  <p className='w-20'>Name</p>
                  <p className='w-30 text-start'>Time</p>
                  <p className='w-50 text-start'>Description</p>
                  <p className='w-30 text-start'>Difficulty</p>
                  <p className='w-10'></p>
            </div>
            {methodTableDatas.map((method) => (
                  <TableRowContainer key={method.id}>
                        <p className='w-20'>{method.id}</p>
                        <p className='w-20'>{method.name}</p>
                        <p className='w-30 text-start '>{method.timeInfo}</p>
                        <p className='w-50 text-start'>{method.description.replace(method.description.slice(20), '...')}</p>
                        <div className='w-30'><Tag content={method.difficulty} variant={COLOR_TAG[method.difficulty.toLowerCase()]}/></div>
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
