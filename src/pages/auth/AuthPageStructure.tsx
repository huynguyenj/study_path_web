import BackgroundImage from '@/assets/images/bg-auth.webp'
import type { PropsWithChildren } from 'react'
type AuthPageStructureProps = PropsWithChildren
export default function AuthPageStructure({ children }: AuthPageStructureProps) {
  return (
   <div className='relative h-screen w-full flex items-center justify-center text-white'>
        <img src={BackgroundImage} alt="Background-image" className='absolute inset-0 w-full h-full -z-10' loading='lazy'/>
        <div className='w-full min-w-[24.5rem] max-w-[41rem] mx-auto'>
         {children}
        </div>
    </div>
  )
}
