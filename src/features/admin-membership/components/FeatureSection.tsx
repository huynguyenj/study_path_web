import FeatureHeader from './FeatureHeader'
import FeatureTable from './FeatureTable'

export default function FeatureSection() {
  return (
    <div className='flex flex-col gap-5'>
          <FeatureHeader/> 
          <div>
            <FeatureTable/>  
          </div>    
    </div>
  )
}
