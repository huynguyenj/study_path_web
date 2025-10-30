import Button from '@/components/ui/button/Button'
import Modal from '@/components/ui/popup/Modal'
import useDeleteFeature from '../hooks/useDeleteFeature'
import CircularProgress from '@mui/material/CircularProgress'

type FeatureDeleteModalProps = {
  onClose: () => void
  featureId: string
}
export default function FeatureDeleteModal({ onClose, featureId }: FeatureDeleteModalProps) {
  const { handleDeleteFeature, loading } = useDeleteFeature()
  return (
      <Modal title='Xác nhận xóa' onClose={onClose}>
         <p className='typography-p'>Bạn có chắc muốn xóa</p>
         <div className='mt-2 '>
            <Button disable= {loading ? true : false} size='md' type='normal' variant={loading ? 'inactive' : 'danger'} onClick={() => handleDeleteFeature(featureId)}>
                 {loading ? <CircularProgress/> : <p>Có</p>}
            </Button>
         </div>
      </Modal>
  )
}
