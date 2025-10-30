import Button from '@/components/ui/button/Button'
import useFeatureContext from '../hooks/useFeatureContext'
import CircularProgress from '@mui/material/CircularProgress'
import Tooltip from '@mui/material/Tooltip'
import { truncateText } from '@/utils/truncateText'
import useToggle from '@/hooks/state/useToggle'
import FeatureUpdateModal from './FeatureUpdateModal'
import { useState } from 'react'
import FeatureDeleteModal from './FeatureDeleteModal'

export default function FeatureTable() {
  const context = useFeatureContext()
  const [featureIdChoice, setFeatureIdChoice] = useState<string>()
  const { handleToggle: handleToggleModalUpdate, isToggle: isToggleModalUpdate } = useToggle(false)
  const { handleToggle: handleToggleModalDelete, isToggle: isToggleModalDelete } = useToggle(false)
  const handleOpenUpdateModal = (featureId: string) => {
      setFeatureIdChoice(featureId)
      handleToggleModalUpdate()
  }
  const handleOpenDeleteModal = (featureId: string) => {
      setFeatureIdChoice(featureId)
      handleToggleModalDelete()
  }
  return (
    <div>
      <table className='min-w-[800px] w-full mx-auto typography-p '>
         <thead className='border-b-1 border-gray-300'>
            <tr>
                  <th className='text-start w-[30%] font-medium'>Id</th>
                  <th className='text-start w-[20%] font-medium'>Tên chức năng</th>
                  <th className='text-start font-medium w-[35%]'>Mô tả</th>
                  <th className='text-center font-medium'>Hành động</th>
            </tr>
         </thead>
         <tbody>
          {context.loading ? 
            <tr>
                  <th colSpan={4} className='py-15'><CircularProgress/></th>
            </tr>
            :
            <>
                  {context.listFeatures.length > 0 ?
                  <>
                        {context.listFeatures.map((feature) => (
                              <tr key={feature.id}>
                                    <th className='text-start w-[30%] font-normal py-3'>{feature.id}</th>
                                    <th className='text-start w-[20%] font-normal py-3'>{feature.name}</th>
                                    <th className='text-start font-normal py-3'>
                                          <Tooltip title={feature.description}>
                                               <p>{truncateText(feature.description, 50)}</p> 
                                          </Tooltip>
                                    </th>
                                    <th className='flex flex-col lg:flex-row items-center justify-center py-3 gap-2'>
                                          <Button size='md' type='normal' variant='inactive' onClick={() => handleOpenUpdateModal(feature.id)}>
                                                Chi tiết
                                          </Button>
                                          <Button size='md' type='normal' variant='danger' onClick={() => handleOpenDeleteModal(feature.id)}>
                                                Xóa
                                          </Button>
                                    </th>
                              </tr>
                        ))}
                  </>
                  :
                  <tr>
                        <th colSpan={4}>
                              <p>Chưa có tính năng</p>
                        </th>
                  </tr>
                  }
            </>
         }
         </tbody>
      </table>
      {isToggleModalUpdate && featureIdChoice && 
        <FeatureUpdateModal featureId={featureIdChoice} onClose={handleToggleModalUpdate}/>
      }
      {isToggleModalDelete && featureIdChoice && 
        <FeatureDeleteModal featureId={featureIdChoice} onClose={handleToggleModalDelete}/>
      }
    </div>
  )
}
