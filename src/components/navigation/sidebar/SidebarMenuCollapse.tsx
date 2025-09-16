import { SidebarItems } from '@/const/sidebar-items/sidebar'
import { NavLink } from 'react-router'

export default function SidebarMenuCollapse() {
  return (
    <div className='mt-5'>
        {SidebarItems.map((item) => {
        const Icon = item.icon
          return (
            <NavLink to={item.path} key={item.name} className={({ isActive }) => 
              `relative flex justify-center items-center gap-2 mx-2 mb-5 w-12 h-12 px-5 rounded-full hover:bg-[#e7eff7] dark:hover:bg-[rgba(152,47,140,0.36)] cursor-pointer group  
                ${ isActive && 'bg-[#e7eff7]  dark:bg-[rgba(152,47,140,0.36)]'}`}>
              {Icon && <Icon/>}
             <p className='absolute text-center w-fit px-5 py-2 rounded-2xl opacity-0 group-hover:transform-[translate(100%,0)] group-hover:bg-[rgba(255,255,255,0.1)] group-hover:opacity-100 transition-transform duration-200 ease-in-out'>
              {item.name}
             </p>
            </NavLink>
          )
        })}
      </div>
  )
}
