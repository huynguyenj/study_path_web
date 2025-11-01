import { useState } from 'react'
import MethodTable from './MethodTable'
import EvaluationTable from './EvaluationTable'
import Button from '@/components/ui/button/Button'
import { EvaluationProvider } from '../context/EvaluationProvider'
import { StudyMethodAdminProvider } from '../context/StudyMethodAdminProvider'

export default function MethodTableSection() {
  const [tabValue, setTabValue] = useState(1)
  const handleChange = (newValue: number) => {
    setTabValue(newValue)
  }

  return (
    <div className='mb-5'>
      <div className='flex gap-2'>
          <Button size='md' type='normal' variant={tabValue === 1 ? 'primary' : 'inactive'} onClick={() => handleChange(1)}>
                Phương pháp học
          </Button>
          <Button size='md' type='normal' variant={tabValue === 2 ? 'primary' : 'inactive'} onClick={() => handleChange(2)}>
                Mục đánh giá
          </Button>
      </div>
      {
        tabValue === 1 &&
        <StudyMethodAdminProvider>
          <MethodTable/>
        </StudyMethodAdminProvider> 
      }
      {
        tabValue === 2 && 
        <EvaluationProvider>
          <EvaluationTable/>
        </EvaluationProvider>
      }
    </div>
  )
}
