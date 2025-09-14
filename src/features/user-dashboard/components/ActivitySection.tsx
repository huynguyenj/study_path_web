import WorkLabel from './WorkLabel'
import { EmojiEventsOutlinedIcon, QueryBuilderOutlinedIcon, ShowChartIcon } from '@/assets/icons/mui-icon'

export default function ActivitySection() {
  return (
   <div className='lg:w-[60%] card-dashboard rounded-[5px] px-5 py-5'>
          <h3 className='typography-h3 font-semibold'>Hoạt động gần đây</h3>
          <div className='flex flex-col gap-5 lg:px-5 mt-5'>
            <WorkLabel title='Học trong 8 giờ' sub='1 ngày trước' icon={QueryBuilderOutlinedIcon}/>
            <WorkLabel title='Đã hoàn thành bài kiểm tra' sub='2 ngày trước' icon={EmojiEventsOutlinedIcon}/>
            <WorkLabel title='Đạt kết quả cao 3 lần' sub='3 ngày trước' icon={ShowChartIcon}/>
            <WorkLabel title='Học trong 2 giờ' sub='4 ngày trước' icon={QueryBuilderOutlinedIcon}/>
          </div>
        </div>
  )
}
