import CircularProgress from '@mui/material/CircularProgress'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import { type ElementType } from 'react'

export type AdminDashboardCardProps = {
      title: string
      data: string | number
      icon: ElementType<SvgIconProps>
      variant: 'blue' | 'purple' | 'yellow' | 'orange'
      loading?: boolean
}

export default function AdminDashboardCard({ title, data, icon: Icon, variant, loading }: AdminDashboardCardProps) {
  const backgroundColor: Record<AdminDashboardCardProps['variant'], string> = {
            blue: 'bg-[#EFF5FF] text-[#5B93FF]',
            purple: 'bg-[#F0EFFF] text-[#605BFF]',
            yellow: 'bg-[#FFF7E1] text-[#FFC327]',
            orange: 'bg-[#FFF4F1] text-[#FF8F6B]'
        }
  return (
    <div className='card flex gap-5 w-[100%] px-5 py-7 '>
      <div className={`${backgroundColor[variant]} flex items-center justify-center px-4 h-14 rounded-full`}>
            <Icon/>
      </div>
      <div className='typography-p flex items-center'>
           {loading ? 
             <CircularProgress size={25}/>: 
             <div className='flex flex-col items-center'>
                  <p className='text-[#747373]'>{title}</p>      
                  <h3 className='typography-h3 font-semibold'>{data}</h3>
             </div>
            }
      </div>
    </div>
  )
}
