import IconContainer from '@/components/ui/container/IconContainer'
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
      <IconContainer containerType='circle' variant='primary' icon={Icon} size='sm'/>
      <div className="flex flex-col ">
            <p className="typography-p font-semibold">{title}</p>
            <p className="typography-p text-[#747373]">{sub}</p>
      </div>
    </div>
  )
}
