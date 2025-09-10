import { AutoAwesomeIcon, CalendarMonthIcon, LibraryBooksIcon, ShowChartIcon } from '@/assets/icons/mui-icon'
import { motion } from 'motion/react'

export default function Section1() {
  return (
     <div className='px-10 mt-5 flex flex-col items-center lg:items-start lg:flex-row  justify-center gap-20 mb-20'>
        <motion.div
        initial={{ y:100, scale:0 }}
        whileInView= {{ y:[50, 0], scale: [0.5, 1] }}
        viewport={{ once:false, amount:0.5 }}
        transition={{
            duration: 0.5,
            ease: 'easeInOut'
        }}
        className='w-[30%]'>
          <h3 className='typography-p font-semibold uppercase'>Dịch vụ của chúng tôi</h3>
          <h2 className='relative typography-h2 uppercase font-bold '>
            Chúng tôi đã làm gì?
              <motion.span
             className='absolute w-25 h-1 bg-purple-400 -bottom-2 left-0'></motion.span>
              <motion.span
             className='absolute w-20 h-1 bg-purple-400 bottom-10 right-40'></motion.span>
          </h2>
          <p className='mt-5'>Nếu bạn muốn tìm hiểu về những dịch vụ chúng tôi có. Sau đây sẽ là 1 số dịch vụ bạn sẽ đc trải nghiệm khi dùng sản phẩm của chúng tôi.</p>
        </motion.div>
      <div className='grid grid-cols-2 w-[50%] gap-10'>
        <motion.div
        viewport={{ once:false, amount: 0.1 }}
        whileInView={{
            scale: [0, 0.5, 1]
         }}
         transition={{
            duration: 1,
            ease:'easeInOut'
         }}
        >
          <div className='w-10 h-10 border-solid border-2 border-purple-400 rounded-[5px] flex items-center justify-center'>
            <CalendarMonthIcon/>
          </div>
          <div>
            <p className='font-bold leading-10'>Smart Scheduling</p>
            <p className='leading-7'>Tự động phát hiện thời gian bận/rảnh và tối ưu hóa thời gian học tập để phù hợp với cuộc sống thực.</p>
          </div>
        </motion.div>
         <motion.div
         viewport={{ once:false, amount: 0.1 }}
         whileInView={{
            scale: [0, 0.5, 1]
         }}
         transition={{
            duration: 1,
            ease:'easeInOut'
         }}
         >
          <div className='w-10 h-10 border-solid border-2 border-purple-400 rounded-[5px] flex items-center justify-center'>
            <LibraryBooksIcon/>
          </div>
          <div>
            <p className='font-bold leading-10'>Study Method</p>
            <p className='leading-7'>Bạn sẽ chọn phương pháp học của mình dựa trên việc làm câu hỏi. Hệ thống sẽ đánh giá và sắp xếp lịch học hiệu quả cho bạn</p>
          </div>
        </motion.div>
         <motion.div
         viewport={{ once:false, amount: 0.1 }}
         whileInView={{
            scale: [0, 0.5, 1]
         }}
         transition={{
            duration: 1,
            ease:'easeInOut'
         }}
         >
          <div className='w-10 h-10 border-solid border-2 border-purple-400 rounded-[5px] flex items-center justify-center'>
            <AutoAwesomeIcon/>
          </div>
          <div>
            <p className='font-bold leading-10'>AI Assistant</p>
            <p className='leading-7'>Với sự trợ giúp từ AI sẽ giúp bạn tối ưu hóa việc học của bạn hơn. Bạn sẽ được hướng dẫn cách học hiệu quả nhất.</p>
          </div>
        </motion.div>
         <motion.div
         viewport={{ once:false, amount: 0.1 }}
         whileInView={{
            scale: [0, 0.5, 1]
         }}
         transition={{
            duration: 1,
            ease:'easeInOut'
         }}
         >
          <div className='w-10 h-10 border-solid border-2 border-purple-400 rounded-[5px] flex items-center justify-center'>
            <ShowChartIcon/>
          </div>
          <div>
            <p className='font-bold leading-10'>Quizzes Test</p>
            <p className='leading-7'>Hệ thống sẽ tạo ra bài quiz cho bạn mỗi tuần dựa trên thông tin bạn cung cấp.</p>
          </div>
        </motion.div>
      </div>
      </div>
  )
}
