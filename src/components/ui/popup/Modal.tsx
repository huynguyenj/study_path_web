import { CloseIcon } from '@/assets/icons/mui-icon'
import type { PropsWithChildren } from 'react'

type ModalProps = PropsWithChildren & {
      title: string
      onClose: () => void
}

export default function Modal({ title, children, onClose }: ModalProps) {
  return (
    <div className='absolute inset-0 bg-[rgba(255,255,255,0.1) backdrop-blur-[5px] w-screen h-screen z-15 flex justify-center items-center'>
      <div className='relative w-170 h-fit flex flex-col px-5 py-9 bg-white rounded-2xl z-50 shadow-[0px_0px_5px_5px_rgba(0,0,0,0.1)]'>
            <div className='absolute top-2 right-5 cursor-pointer hover:bg-red-400 hover:text-white rounded-full p-1' onClick={onClose}><CloseIcon/></div>
            <h4 className='typography-h4 font-bold'>{title}</h4>
            {children}
      </div>
    </div>
  )
}
