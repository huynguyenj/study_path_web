import { SidebarItems } from '@/const/sidebar-items/sidebar'
import SidebarItem from './SidebarItem'

export default function SidebarMenu() {
  return (
     <div className='px-5 mt-5'>
        {SidebarItems.map((item) => (
            <SidebarItem key={item.name} name={item.name} path={item.path} icon={item.icon}/>
        ))}
      </div>
  )
}
