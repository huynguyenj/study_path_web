import { useContext } from 'react'
import StudyMethodContext from '../context/StudyMethodProvider'

export default function ProcessSection() {
  const context = useContext(StudyMethodContext)
  const currentIndex = context?.page || 0
  const fullPercentData = context?.limit || 100
  
  const calculateWidthPercent = (): string => {
    const widthPercent =(currentIndex) / fullPercentData
    return String(widthPercent*100)
  }
  // console.log(calculateWidthPercent())
  return (
    <div className='flex flex-col gap-3'>
      <div className='typography-p flex justify-between items-center'>
        <p>Quá trình</p>
        <p>{currentIndex} trên {fullPercentData}</p>
      </div>
      <div className="relative w-full h-3 bg-gray-400 rounded-2xl">
        <span className='absolute inset-0 h-[100%] bg-blue-500 rounded-2xl' style={{
          width: `${calculateWidthPercent()}%`
        }}></span>
      </div>
    </div>
  )
}

