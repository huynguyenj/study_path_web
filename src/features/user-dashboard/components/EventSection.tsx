import EventLabel from './EventLabel'

export default function EventSection() {
  return (
   <div className='lg:w-[38%] flex flex-col gap-5 card-dashboard rounded-[5px] px-5 py-5'>
            <h3 className='typography-h3 font-semibold'>Sự kiện sắp tới</h3>
            <EventLabel title='Toán' sub='Hôm nay, 9:00AM - 10:30AM'/>
            <EventLabel title='Tiếng Anh' sub='Hôm nay, 14:00PM - 15:30PM'/>
            <EventLabel title='Lịch sử' sub='Thứ sáu, 16:00PM - 10:30PM'/>
      </div>
  )
}
