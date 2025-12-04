import { useEffect, useRef, useState, type ChangeEvent } from 'react'
import useEditMembershipPlan from '../hooks/useEditMembershipPlan'
import type { MembershipFeature, MembershipPlanType, UpdateMembership } from '../types/membership-type'
import useFormCheck from '@/hooks/component-hooks/useFormCheck'
import Button from '@/components/ui/button/Button'
import Modal from '@/components/ui/popup/Modal'
import CircularProgress from '@mui/material/CircularProgress'
import { Input } from '@/components/ui/input/Input'
import { Select } from '@/components/ui/input/Select'
import { AddIcon, CloseIcon } from '@/assets/icons/mui-icon'
import Tag from '@/components/ui/tags/Tag'
import useGetListFeatures from '../hooks/useGetListFeatures'

type MembershipUpdateModalProps = {
   data: MembershipPlanType
   onClose: () => void
}

export default function MembershipUpdateModal({ data, onClose }: MembershipUpdateModalProps) {
  const { fetchMembershipDetail, loading, membershipPlanDetail, updateMembershipPlan } = useEditMembershipPlan()
  const { listFeatures } = useGetListFeatures()

  const { errors, validate } = useFormCheck<UpdateMembership>()

  const [listFeatureChoices, setListFeatureChoices] = useState<MembershipFeature[]>([])
  const selectInputRef = useRef<HTMLSelectElement>(null)
  
  const handleAddListFeature = () => {
         if (selectInputRef.current) {
              const value: MembershipFeature = JSON.parse(selectInputRef.current.value)
              setListFeatureChoices((prev) => [...prev, value])
        }
    }
  
    const removeFeature = (featureId: string) => {
      const updateList = listFeatureChoices.filter((feature) => feature.id !== featureId)
      setListFeatureChoices(updateList)
   }
  
    const handleUpdate = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const formData: UpdateMembership = {
          name: form.get('name') as string,
          duration: form.get('duration') as string,
          fee: Number(form.get('fee')),
          memberShipPlanType: form.get('memberShipPlanType') as string,
          featureIds: listFeatureChoices.map((feature) => feature.id)
        }
        if (validate(formData, { duration: '', fee: '', name: '' })) {
             await updateMembershipPlan(data.id, formData)
        }
    }
  
    useEffect(() => {
      fetchMembershipDetail(data.id)
      setListFeatureChoices(data.features)
    }, [data])

  return (
    <>
            <Modal onClose={onClose} title='Thông tin chi tiết'>
                  {loading ? 
                        <div className='flex items-center justify-center my-15'>
                              <CircularProgress/>
                        </div>
                  :
                  <>
                        <form onSubmit={handleUpdate} className='flex flex-col gap-8 mt-8'>
                              <Input label='Tên gói thành viên' name='name' defaultValue={membershipPlanDetail?.name} size='md' type='text' variant='rounded' error={errors.name}/>
                              <Input label='Thời gian của gói' name='duration' defaultValue={membershipPlanDetail?.duration} size='md' type='text' variant='rounded' error={errors.duration}/>
                              <Input label='Chi phí' name='fee' defaultValue={membershipPlanDetail?.fee} size='md' type='text' variant='rounded' error={errors.fee}/>
                              <div className='flex items-center gap-3'>
                                    <p>Kiểu của gói thành viên</p>
                                    <Select
                                      name='memberShipPlanType'
                                      size='md'
                                      variant='rounded'
                                      defaultValue={data.memberShipPlanType}
                                      options={[
                                          { name: 'Tháng', value: 'MONTH' },
                                          { name: 'Năm', value: 'YEAR' }
                                      ]}
                                    />
                              </div>
                              <div>
                                    <p>Tính năng</p>
                                    {membershipPlanDetail && membershipPlanDetail?.features.length > 0 ?
                                          <div className='flex flex-col gap-2 mt-2'>
                                                {membershipPlanDetail?.features.map((feature) => (
                                                      <Tag key={feature.id} content={feature.name} variant='primary'/>
                                                ))}
                                          </div>
                                    :
                                    <p className='text-center mt-5 text-gray-primary font-medium'>Chưa có tính năng</p>
                                    }
                              </div>
                              <div>
                                 <div className='flex items-center gap-2'>
                                    <p className='typography-p'>Thêm tính năng: </p>
                                    <Select ref={selectInputRef} 
                                          name='priority' 
                                          options={listFeatures.map((feature) => (
                                                { name: feature.name, value: JSON.stringify(feature) }
                                          ))}
                                          size='md'
                                          variant='rounded'
                                    />
                                    <div className='rounded-full bg-gray-300 p-2' onClick={handleAddListFeature}>
                                          <AddIcon/>
                                    </div>
                                 </div>
                                      {listFeatureChoices.length > 0 && 
                                                <div className='flex flex-col gap-2'>
                                                      {listFeatureChoices.map((item, index) => (
                                                      <div key={index} className='relative w-fit cursor-pointer group flex gap-2 items-center'>
                                                            <div className='group-hover:-translate-x-8 transition-all duration-200 ease-in-out gap-2 mt-2'>
                                                                  <Tag content={item.name} variant='primary' key={index}/>
                                                            </div>
                                                            <div className='absolute right-0 -z-10 -translate-x-0 group-hover:z-0 transition-all duration-300 ease-in-out' onClick={() => removeFeature(item.id)}>
                                                                  <CloseIcon/>
                                                             </div>
                                                      </div>
                                                      
                                                ))}
                                                </div>
                                          }
                              </div>
                              <Button size='md' type='normal' variant='primary'>
                                    Cập nhật
                              </Button>
                        </form>
                  </>
                  }
            </Modal>
    </>
  )
}
