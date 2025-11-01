import TableContainer from '@/components/ui/container/TableContainer'
import Button from '@/components/ui/button/Button'
import { MoreHorizIcon } from '@/assets/icons/mui-icon'
import TableRowContainer from '@/components/ui/container/TableRowContainer'
import Tag from '@/components/ui/tags/Tag'
import { COLOR_TAG } from '../const/color-tag'
import PaginationSimple from '@/components/pagination/PaginationSimple'
import useEvaluationContext from '../hooks/useEvaluationContext'
import CircularProgress from '@mui/material/CircularProgress'
import Tooltip from '@mui/material/Tooltip'
import { truncateText } from '@/utils/truncateText'
import useToggle from '@/hooks/state/useToggle'
import { useState } from 'react'
import UpdateEvaluationModal from './UpdateEvaluationModal'

export default function EvaluationTable() {
  const context = useEvaluationContext()
  const { handleToggle, isToggle } = useToggle(false)
  const [evaluationChoiceId, setEvaluationChoiceId] = useState<string>()
  const handleOpenEvaluationDetailModal = (evaluationId: string) => {
      setEvaluationChoiceId(evaluationId)
      handleToggle()
  }
  return (
      <TableContainer>
             {/* <div className='flex justify-end'>
                  <Button type='normal' size='md' variant='primary'>
                        <AddIcon/>
                        Add new evaluation
                  </Button>
            </div> */}
            <div className='px-5 py-2 flex justify-between text-gray-primary font-medium'>
                  <p className='w-20'>ID</p>
                  <p className='w-40'>Name</p>
                  <p className='w-35 text-start'>Total questions</p>
                  <p className='w-50 text-start'>Description</p>
                  <p className='w-30 text-start'>Active</p>
                  <p className='w-10'></p>
            </div>
            {context.loading ? 
              <div className='flex justify-center items-center mt-15'>
                    <CircularProgress/>
              </div>
             :
            <>
            {context.evaluationList ? 
                  <>
                        {context.evaluationList.items.map((evaluation) => (
                              <TableRowContainer key={evaluation.id}>
                                    <Tooltip title={evaluation.id}>
                                          <p className='w-20'>{truncateText(evaluation.id, 5)}</p>
                                    </Tooltip>
                                    <p className='w-40'>{evaluation.name}</p>
                                    <p className='w-35 text-start '>{evaluation.totalQuestion} câu hỏi</p>
                                    <Tooltip title={evaluation.description}>
                                          <p className='w-50 text-start'>{truncateText(evaluation.description, 30)}</p>
                                    </Tooltip>
                                    <div className='w-30'><Tag content={!evaluation.isDeleted ? 'Active' : 'Inactive'} variant={!evaluation.isDeleted ? COLOR_TAG['true'] : COLOR_TAG['false']}/></div>
                                    <div className='relative w-10 group'>
                                          <MoreHorizIcon/>
                                           <div className='flex flex-col w-30 gap-2 absolute right-10 scale-0 group-hover:scale-100 transition-all duration-200 ease-in-out'>
                                                <Button size='sm' type='normal' variant='secondary' onClick={() => handleOpenEvaluationDetailModal(evaluation.id)}>
                                                      Xem chi tiết
                                                </Button>
                                                <Button size='sm' type='normal' variant='danger'>
                                                      Xóa
                                                </Button>
                                          </div>
                                    </div>
                              </TableRowContainer>
                        ))}
                        <PaginationSimple 
                              currentPage={context.currentPage} 
                              limit={context.totalPages}
                              goBackPage={context.goBackPage} 
                              goToNextPage={context.goToNextPage} 
                        />
                  </>
                  :
                  <p className='typography-p text-center text-gray-primary font-medium mt-15'>Chưa có các mục đánh giá</p>
              }
            </>
            }
            { isToggle && evaluationChoiceId &&
                  <UpdateEvaluationModal evaluationId={evaluationChoiceId} onClose={handleToggle}/>
            }
      </TableContainer>
  )
}
