import UserActiveAndSessionChartSection from './UserActiveAndSessionChartSection'
import AdminLineChartSection from './AdminLineChartSection'
export default function AdminChartSection() {
  return (
    <div className='flex flex-col gap-3'>
      <AdminLineChartSection/>
      <div className='relative flex flex-col gap-14 card px-6 py-7 lg:w-[40%]'>
       <h4 className='font-semibold typography-h4 text-[#6c6c80]'>Thông số phân tích người dùng</h4>
            <UserActiveAndSessionChartSection/>
      </div>
    </div>
  )
}
