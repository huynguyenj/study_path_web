import type { SvgIconProps } from '@mui/material/SvgIcon'
import { type ElementType } from 'react'

export type AdminDashboardCardProps = {
      title: string
      data: string | number
      icon: ElementType<SvgIconProps>
      variant: 'blue' | 'purple' | 'yellow' | 'orange'
}

export default function AdminDashboardCard({ title, data, icon: Icon, variant }: AdminDashboardCardProps) {
  const backgroundColor: Record<AdminDashboardCardProps['variant'], string> = {
            blue: 'bg-[#EFF5FF] text-[#5B93FF]',
            purple: 'bg-[#F0EFFF] text-[#605BFF]',
            yellow: 'bg-[#FFF7E1] text-[#FFC327]',
            orange: 'bg-[#FFF4F1] text-[#FF8F6B]'
        }
  return (
    <div className='card flex gap-5 w-[100%]  px-5 py-7 '>
      <div className={`${backgroundColor[variant]} flex items-center justify-center px-4 h-14 rounded-full`}>
            <Icon/>
      </div>
      <div className='typography-p'>
            <h3 className='typography-h3 font-semibold'>{data}</h3>
            <p className='text-[#747373]'>{title}</p>
      </div>
    </div>
  )
}
