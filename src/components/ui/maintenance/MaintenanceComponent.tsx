import MaintanceImage from '@/assets/maintenance-background-design.png'
export default function MaintenanceComponent() {
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col items-center gap-5'>
        <img src={MaintanceImage} alt="maintance" className='w-80 h-80' />
        <h3 className='typography-h3 font-bold'>Chúng tôi đang bảo trì. Xin hãy thử lại sau.</h3>
      </div>
    </div>
  )
}
