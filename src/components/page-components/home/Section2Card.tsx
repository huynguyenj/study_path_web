import type { SvgIconProps } from '@mui/material/SvgIcon'
import type { ElementType } from 'react'

type Section2CardPros = {
      top: number
      title: string
      icon?: ElementType<SvgIconProps>
}

export default function Section2Card({ top, title, icon: Icon }: Section2CardPros) {
  return (
    <div className='sticky flex flex-col items-center gap-10 bg-white shadow-[0px_2px_10px_5px_rgba(0,0,0,0.1)]  dark:bg-black dark:shadow-[0px_2px_10px_5px_rgba(255,255,255,0.2)] rounded-2xl w-[30%] py-10 px-5 mx-auto' style={{ top: top }}>
      <div className='flex flex-col items-center justify-center gap-5'>
            <div className='w-15 h-15 rounded-full bg-blue-400 flex justify-center items-center'>
                  {Icon && <Icon/>}
            </div>
            <p className='relative typography-p font-semibold text-center'>{title}</p>
      </div>
    
    </div>
  )
}
