import TableRowContainer from '@/components/ui/container/TableRowContainer'
import Tag from '@/components/ui/tags/Tag'
import { COLOR_TAG } from '../const/color-tag'
import PaginationSimple from '@/components/pagination/PaginationSimple'
import Button from '@/components/ui/button/Button'
import TableContainer from '@/components/ui/container/TableContainer'
import Modal from '@/components/ui/popup/Modal'
import { Input } from '@/components/ui/input/Input'
import { Select } from '@/components/ui/input/Select'
import { studyMethodDifficultyList } from '../const/study-method'
import useCreateStudyMethod from '../hooks/useCreateStudyMethod'
import useToggle from '@/hooks/state/useToggle'
import Tooltip from '@mui/material/Tooltip'
import { truncateText } from '@/utils/truncateText'
import useGetStudyMethodContext from '../hooks/useGetStudyMethodContext'
import CircularProgress from '@mui/material/CircularProgress'

export default function MethodTable() {
    const context = useGetStudyMethodContext()
    const { handleToggle, isToggle } = useToggle(false)
    const { errors, handleSubmit, loading:submitLoading } = useCreateStudyMethod()
  
  return (
      <>
      <TableContainer>
            <div className='flex justify-end'>
                  {/* <Button type='normal' size='md' variant='primary' onClick={handleToggle}>
                        <AddIcon/>
                        Tạo phương pháp học
                  </Button> */}
            </div>
            <div className='px-5 py-2 flex justify-between text-gray-primary font-medium mt-5'>
                  {/* <p className='w-20'>ID</p> */}
                  <p className='w-55'>Phương pháp</p>
                  <p className='w-35 text-start'>Thời gian chú thích</p>
                  <p className='w-50 text-start'>Mô tả</p>
                  <p className='w-30 text-start'>Độ khó</p>
                  {/* <p className='w-10'></p> */}
            </div>
            {context.loading || submitLoading ? 
                  <div className='flex justify-center items-center mt-15'>
                        <CircularProgress/>
                  </div>
             :
             <>
                  {context.methodTableDatas ? 
                  <>
                        {context.methodTableDatas.items.map((method) => (
                              <TableRowContainer key={method.id}>
                                    {/* <p className='w-20'>{method.id}</p> */}
                                    <p className='w-55'>{method.name}</p>
                                    <p className='w-35 text-start '>{method.timeInfo}</p>
                                    <p className='w-50 text-start'>
                                          <Tooltip title= {method.description}>
                                          <p>
                                                {truncateText(method.description, 35)}
                                          </p>
                                          </Tooltip> 
                                    </p>
                                    <div className='w-30'><Tag content={method.difficulty} variant={COLOR_TAG[method.difficulty.toLowerCase()]}/></div>
                                    {/* <div className='w-10 group cursor-pointer'>
                                          <MoreHorizIcon/>
                                          <div className='flex flex-col gap-2 absolute right-15 scale-0 group-hover:scale-100 transition-all duration-200 ease-in-out'>
                                                <Button size='sm' type='normal' variant='secondary'>
                                                Xem chi tiết
                                                </Button>
                                                <Button size='sm' type='normal' variant='danger'>
                                                Xóa
                                                </Button>
                                          </div>
                                    </div> */}
                              </TableRowContainer>
                        ))}
                  </>
                  : 
                  <p className='typography-p text-center p-5 text-gray-primary'>Chưa có phương pháp học</p>
                  }
             </>
            }
            <PaginationSimple 
                  currentPage={context.currentPage} 
                  limit={context.totalPages}
                  goBackPage={context.goBackPage} 
                  goToNextPage={context.goToNextPage} 
            />
      </TableContainer>
            {isToggle && 
        <Modal title='Tạo phương pháp học mới' onClose={handleToggle}>
          <form onSubmit={handleSubmit} className='flex flex-col gap-8 mt-8'>
            <Input label='Tên phương pháp' variant='rounded' type='text' name='name' size='md' placeHolder='Pomodoro' error={errors.name}/>
            <Input label='Mô tả' variant='rounded' type='text' name='description' size='md' placeHolder='Pomodoro là phương pháp học...' error={errors.description}/>
            <Input label='Thời gian chú thích' variant='rounded' type='text' name='timeInfo' size='md' placeHolder='1-2h giờ mỗi ngày' error={errors.timeInfo}/>
            <div className='flex items-center gap-2'>
              <p>Độ khó của phương pháp</p> 
              <Select
                variant='rounded'
                size='md'
                name='difficulty'
                options={studyMethodDifficultyList.map((difficulty) => (
                  { name: difficulty.name, value: difficulty.value }
                ))}
                error={errors.difficulty}
              />
            </div>
            <Button size='md' type='normal' variant='primary'>
                Tạo
            </Button>
          </form>
        </Modal>
      }
      </>
  )
}
