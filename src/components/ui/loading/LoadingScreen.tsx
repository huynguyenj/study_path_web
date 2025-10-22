import { motion } from 'motion/react'

export default function LoadingScreen() {
  return (
    <div className='fixed inset-0 backdrop-blur-[5px] w-screen min-h-screen z-15 flex gap-2 justify-center items-center'>
      <motion.div
       initial={{ y: 0 }}
       whileInView={{ y: 5 }}
       transition={{
            type: 'spring',
            bounce: 0.25,
            delay: 0.2,
            repeat: Infinity,
            ease: 'easeInOut'
       }}
       className='w-3 h-3 rounded-full bg-black dark:bg-white'></motion.div>
      <motion.div 
       initial={{ y: 0 }}
       whileInView={{ y: 5 }}
       transition={{
            type: 'spring',
            bounce: 0.25,
            delay: 0.5,
            repeat: Infinity,
            ease: 'easeInOut'

       }}
       className='w-3 h-3 rounded-full bg-black dark:bg-white'></motion.div>
      <motion.div 
       initial={{ y: 0 }}
       whileInView={{ y: 5 }}
       transition={{
            type: 'spring',
            bounce: 0.25,
            delay: 0.7,
            repeat: Infinity,
            ease: 'easeInOut'

       }}
       className='w-3 h-3 rounded-full bg-black dark:bg-white'></motion.div>
    </div>
  )
}
