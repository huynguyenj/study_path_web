import Modal from '@/components/ui/popup/Modal'
import useDeleteMembership from '../hooks/useDeleteMembership'
import Button from '@/components/ui/button/Button'
import CircularProgress from '@mui/material/CircularProgress'

type MembershipDeleteModalProps = {
  onClose: () => void
  membershipId: string
}

export default function MembershipDeleteModal({ membershipId, onClose }: MembershipDeleteModalProps) {
  const { handleDeleteMembership, loading } = useDeleteMembership()
  return (
    <Modal onClose={onClose} title='Xác nhận'>
      <p>Bạn có chắc là muốn xóa gói không ?</p>
      <div className='flex mt-5'>
            <Button disable= {loading? true : false} size='md' type='normal' variant={loading ? 'inactive' : 'danger'} onClick={() => handleDeleteMembership(membershipId)}>
                  {loading? <CircularProgress/> : <p>Xóa</p>}
            </Button>
      </div>
    </Modal>
  )
}
