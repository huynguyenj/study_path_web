import TableContainer from '@/components/ui/container/TableContainer'
import useGetEvaluationData from '../hooks/useGetEvaluationData'
import Button from '@/components/ui/button/Button'
import { AddIcon, MoreHorizIcon } from '@/assets/icons/mui-icon'
import TableRowContainer from '@/components/ui/container/TableRowContainer'
import Tag from '@/components/ui/tags/Tag'
import { COLOR_TAG } from '../const/color-tag'
import PaginationSimple from '@/components/pagination/PaginationSimple'
import usePagination from '@/hooks/pagination/usePagination'

export default function EvaluationTable() {
  const { evaluationDataTable } = useGetEvaluationData()
  const { currentPage, goBackPage, goToNextPage, limit } = usePagination({ limit: 5 })
  return (
      <TableContainer>
             <div className='flex justify-end'>
                  <Button size='md' variant='primary'>
                        <AddIcon/>
                        Add new evaluation
                  </Button>
            </div>
            <div className='px-5 py-2 flex justify-between text-gray-primary font-medium'>
                  <p className='w-20'>ID</p>
                  <p className='w-40'>Name</p>
                  <p className='w-35 text-start'>Total questions</p>
                  <p className='w-50 text-start'>Description</p>
                  <p className='w-30 text-start'>Active</p>
                  <p className='w-10'></p>
            </div>
            {evaluationDataTable.map((evaluation) => (
                  <TableRowContainer key={evaluation.id}>
                        <p className='w-20'>{evaluation.id}</p>
                        <p className='w-40'>{evaluation.name}</p>
                        <p className='w-35 text-start '>{evaluation.totalQuestion} câu hỏi</p>
                        <p className='w-50 text-start'>{evaluation.description.replace(evaluation.description.slice(20), '...')}</p>
                        <div className='w-30'><Tag content={evaluation.active ? 'Active' : 'Inactive'} variant={COLOR_TAG[String(evaluation.active)]}/></div>
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
