import { useEffect, type ChangeEvent } from 'react'
import useEditFeature from '../hooks/useEditFeature'
import Modal from '@/components/ui/popup/Modal'
import { Input } from '@/components/ui/input/Input'
import Button from '@/components/ui/button/Button'
import useFormCheck from '@/hooks/component-hooks/useFormCheck'
import type { UpdateFeature } from '../types/membership-type'
import CircularProgress from '@mui/material/CircularProgress'

type FeatureUpdateModalProps = {
  featureId: string
  onClose: () => void
}

export default function FeatureUpdateModal({ featureId, onClose }: FeatureUpdateModalProps) {
  const { featureDetail, fetchFeatureDetail, loading, updateFeature } = useEditFeature()
  const { errors, validate } = useFormCheck<UpdateFeature>()
  const handleUpdate = async (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault()
      const form = new FormData(e.currentTarget)
      const formData: UpdateFeature = {
        name: form.get('name') as string,
        description: form.get('description') as string
      }
      if (validate(formData, { name: '', description: '' })) {
        await updateFeature(featureId, formData)
      }
  }
  useEffect(() => {
      fetchFeatureDetail(featureId)
  }, [featureId])
  return (
      <Modal title='Thông tin chi tiết' onClose={onClose}>
         <form onSubmit={handleUpdate} className='flex flex-col gap-8 mt-8'>
            <Input label='Tên tính năng' name='name' defaultValue={featureDetail?.name} size='md' type='text' variant='rounded' error={errors.name}/>
            <Input label='Mô tả tính năng' name='description' defaultValue={featureDetail?.description} size='md' type='text' variant='rounded' error={errors.description}/>
            <Button disable= {loading ? true : false} size='md' type='rounded' variant={loading ? 'inactive' : 'primary'}>
                  {loading ? <CircularProgress/> : <p>Cập nhật</p>}
            </Button>
         </form>
      </Modal>
  )
}
