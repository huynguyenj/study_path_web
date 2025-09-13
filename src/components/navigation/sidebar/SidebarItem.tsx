import type { SvgIconProps } from '@mui/material/SvgIcon'
import type { ElementType } from 'react'
import { NavLink } from 'react-router'
type SidebarItemProps = {
      name: string
      path: string
      icon?: ElementType<SvgIconProps>
}
export default function SidebarItem({ name, path, icon: Icon }: SidebarItemProps) {
  return (
    <NavLink to={path} className={({ isActive }) => 
              `flex gap-2 px-5 py-3 mb-2 hover:bg-[#e7eff7] hover:border-r-[#1D89EA] dark:hover:bg-[rgba(152,47,140,0.36)] dark:hover:border-r-[rgba(159,31,144,1)] cursor-pointer rounded-2xl hover:border-r-[5px] 
                ${ isActive && 'font-semibold text-[#1D89EA] dark:text-[rgba(159,31,144,1)] border-r-[5px] bg-[#e7eff7] border-r-[#1D89EA] dark:bg-[rgba(152,47,140,0.36)] dark:border-r-[rgba(159,31,144,1)]'}`}>
              {Icon && <Icon/>}
              <p className='typography-p'>
                  {name}
              </p>
      </NavLink>
  )
}
