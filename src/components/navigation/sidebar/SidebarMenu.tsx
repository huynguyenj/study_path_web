import { type SidebarItemsProps } from '@/const/sidebar-items/sidebar'
import SidebarItem from './SidebarItem'

type SidebarMenuProp = {
  data: SidebarItemsProps[]
}

export default function SidebarMenu({ data }: SidebarMenuProp) {
  return (
     <div className='px-5 mt-5'>
        {data.map((item) => (
            <SidebarItem key={item.name} name={item.name} path={item.path} icon={item.icon}/>
        ))}
      </div>
  )
}
