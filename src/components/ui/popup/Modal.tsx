import { CloseIcon } from '@/assets/icons/mui-icon'
import type { PropsWithChildren } from 'react'
import { motion } from 'motion/react'

type ModalProps = PropsWithChildren & {
      title: string
      onClose: () => void
}

export default function Modal({ title, children, onClose }: ModalProps) {
  return (
    <motion.div 
      initial= {{ scale: 0 }}
      animate= {{ scale: 1 }}
      exit={{ scale:0 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.2
      }}
      className='fixed inset-0 bg-[rgba(255,255,255,0.1) backdrop-blur-[5px] w-screen min-h-screen z-15 flex justify-center items-center'>
      <motion.div 
        initial= {{ opacity: 0, y: 100 }}
        animate= {{ opacity: 1, y: 0 }}
        exit={{ scale:0, y: 100 }}
        transition={{
          ease: 'easeInOut',
          delay: 0.3,
          duration: 0.2
      }}
        className='relative w-170 max-h-[90%] flex flex-col px-5 py-9 bg-white dark:bg-black rounded-2xl z-50 shadow-[0px_0px_5px_5px_rgba(0,0,0,0.1)] dark:shadow-[0px_0px_5px_5px_rgba(255,255,255,0.1)] overflow-y-auto'>
            <div className='absolute top-2 right-5 cursor-pointer hover:bg-red-400 hover:text-white rounded-full p-1' onClick={onClose}><CloseIcon/></div>
            <h3 className='typography-h3 font-bold'>{title}</h3>
            {children}
      </motion.div>
    </motion.div>
  )
}
