import type { SvgIconProps } from '@mui/material/SvgIcon'
import type { ElementType } from 'react'

type WorkLabelProps = {
      title: string
      sub: string
      icon: ElementType<SvgIconProps>
}
export default function WorkLabel({ title, sub, icon: Icon }: WorkLabelProps) {
  return (
    <div className="flex items-center w-full gap-3">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#DBEAFE] dark:bg-purple-300 text-[#1D89EA] dark:text-purple-500">
            <Icon/>
      </div>
      <div className="flex flex-col ">
            <p className="typography-p font-semibold">{title}</p>
            <p className="typography-p text-[#747373]">{sub}</p>
      </div>
    </div>
  )
}
