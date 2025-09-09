import Button from '@/components/ui/button/Button'
import ScheduleImage from '@/assets/schedule-image.jpg'
import AimImage from '@/assets/aim-image.webp'
import AiImage from '@/assets/AI-img.png'
import { motion } from 'motion/react'

export default function HeroSection() {
  return (
     <div className="flex w-full h-[650px] overflow-x-hidden">
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{
                  duration: 0.4,
                  ease: 'easeInOut'
            }}
        className='flex flex-col gap-5 justify-center w-[50%] px-10'>
          <div className="">
            <h1 className="typography-h1 leading-15 ">Giải pháp hiện đại, tối ưu lịch trình của bạn</h1>          
            <h3 className="typography-h3 mt-5">Quản lí lịch trình, tối ưu hóa việc học của bạn bằng công cụ hỗ trợ bạn tạo ra lịch học hiệu quả. Với công cụ AI sẽ giúp bạn đưa ra lịch học tối ưu nhất và hiệu quả nhất.</h3>
          </div>
          <div>
            <Button size='md' variant='primary'>
              <p>Try it now!</p>
            </Button>
          </div>
        </motion.div>
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{
                  duration: 0.4,
                  ease: 'easeInOut'
            }}
        className="relative w-[50%] h-full">
          <motion.div
          initial={{ x: 0, y: 0 }}
          whileInView={{ x: [0, 5, 0], y: [0, 10, 0] }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop'
          }}
          className='absolute top-5 right-10'>
            <img src={ScheduleImage} alt="Schedule-image" className='w-[250px] h-[250px] rounded-2xl' loading='lazy' />
          </motion.div>
          <motion.div
          initial={{ x: 0, y: 0 }}
          whileInView={{ x: [5, 0, 5], y: [0, 15, 0] }}
          transition={{
            duration: 5,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop'
          }}
          className='absolute top-10 right-90 '>
            <img src={AimImage} alt="Aim-image" className=' w-[250px] h-[250px] rounded-2xl' loading='lazy' />
          </motion.div>
          <motion.div
          initial={{ y: 0 }}
          whileInView={{ y: [0, 5, 0] }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop'
          }}
          className='absolute bottom-20 right-50'>
            <img src={AiImage} alt="AI-image" className='w-[250px] h-[250px] aspect-square rounded-2xl' loading='lazy' />
          </motion.div>
        </motion.div>
      </div>
  )
}
