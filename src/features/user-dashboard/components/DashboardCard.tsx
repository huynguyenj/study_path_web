import type { SvgIconProps } from '@mui/material/SvgIcon'
import type { ElementType } from 'react'

type DashboardCardProps = {
      title: string
      data: string | number
      icon: ElementType<SvgIconProps>
      variant: 'blue' | 'purple' | 'green' | 'orange'
}

export default function DashboardCard({ title, data, variant, icon: Icon } :DashboardCardProps) {
  const backgroundColor: Record<DashboardCardProps['variant'], string> = {
      blue: 'bg-[#3B82F6]',
      purple: 'bg-[#A855F7]',
      green: 'bg-[#22C55E]',
      orange: 'bg-[#F97316]'
  }
  return (
    <div className='card-dashboard flex justify-between  gap-5 w-[100%]  px-5 py-7 '>
      <div className='typography-p'>
            <p className='text-[#747373]'>{title}</p>
            <h3 className='typography-h3 font-semibold'>{data}</h3>
      </div>
      <div className={`${backgroundColor[variant]} flex items-center justify-center px-4 h-14 rounded-2xl`}>
            <Icon className='text-white dark:text-black'/>
      </div>
    </div>
  )
}
