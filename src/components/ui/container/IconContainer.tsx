import type { SvgIconProps } from '@mui/material/SvgIcon'
import type { ElementType } from 'react'

type IconContainerProps = {
      icon: ElementType<SvgIconProps>
      containerType: 'circle' | 'square' | 'rounded'
      variant: 'primary' | 'secondary'|'inactive'| 'complete'
      size: 'sm' | 'md' | 'lg'
}
export default function IconContainer({ icon: Icon, containerType, size, variant }: IconContainerProps) {
  return (
    <div className={style(variant, containerType, size)}>
      <Icon/>
    </div>
  )
}

const style = (variant: IconContainerProps['variant'], containerType: IconContainerProps['containerType'], size: IconContainerProps['size']):string => {
      const defaultsStyle = 'flex items-center justify-center p-1'
      const backgroundColor: Record<IconContainerProps['variant'], string> = {
            primary: 'bg-[#DBEAFE] dark:bg-purple-300 text-[#1D89EA] dark:text-purple-500',
            secondary:'bg-[#9112BC] dark:bg-[#A8FBD3] text-[#AE75DA] dark:text-[#4FB7B3]',
            inactive: 'bg-[#E5E7EB] text-[#CACFD5]',
            complete:'bg-[#DCFCE7] text-[#3EB469]'
      }
      const sizes: Record<IconContainerProps['size'], string> = {
            sm: 'w-10 h-10',
            md:'w-15 h-15',
            lg: 'w-18 h-18'
      }
      const containers: Record<IconContainerProps['containerType'], string> = {
            circle: 'rounded-full',
            rounded:'rounded-[5px]',
            square: ''
      }
      return `${defaultsStyle} ${backgroundColor[variant]} ${sizes[size]} ${containers[containerType]}`
}
