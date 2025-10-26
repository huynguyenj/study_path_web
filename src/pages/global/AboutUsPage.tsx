import AboutUsImg from '@/assets/images/about-us-pic.jpg'
import { motion } from 'motion/react'

export default function AboutUsPage() {
  return (
    <>
    <div className='relative flex mt-10 px-10 py-5 justify-between items-center overflow-x-hidden'>
      <div className='relative w-[40%]'>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut'
          }}
          className='typography-h1 uppercase font-semibold'>Về chúng tôi</motion.h1>
        <motion.hr
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{
            duration: 0.7,
            ease: 'easeInOut'
          }}
          className='typography-p my-5'/>
        <motion.p
         initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
            scale: { type: 'spring' }
          }}
        >Chúng tôi là startup với niềm đam mê mãnh liệt về công nghệ. Chúng tôi sẽ cùng nhau phát triển hơn nữa và được nhiều người biết tới hơn. Mục tiêu của chúng tôi tạo ra sự thoải mái trong học tập và giúp mọi người học hiệu quả hơn.  </motion.p>
        <motion.div
        initial={{ width: 0 }}
        animate={{ width:'50%' }}
        transition={{
          duration: 1.1,
          ease: 'easeInOut'
        }}
        className='absolute -bottom-20 left-0 bg-blue-400 dark:bg-amber-100 w-full h-10'>
        </motion.div>
      </div>
      <motion.img 
       initial={{ scale: 0 }}
       animate={{ scale: 1 }}
       transition={{
        duration: 1
       }}
       src={AboutUsImg} alt="about-us-image" className='w-[50%] h-[50%] rounded-full' loading='lazy'/>
       
    </div>
    </>
  )
}
