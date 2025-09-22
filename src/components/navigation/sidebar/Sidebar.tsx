import SidebarLogo from './SidebarLogo'
import SidebarMenu from './SidebarMenu'
import useToggleSidebar from '@/hooks/state/useToggleSidebar'
import SidebarMenuCollapse from './SidebarMenuCollapse'
import { motion } from 'motion/react'
import { SideBarAdmin, SidebarItems } from '@/const/sidebar-items/sidebar'
import { useMemo } from 'react'

type SidebarProps = {
  type: 'admin' | 'user'
}

export default function Sidebar({ type }: SidebarProps) {
  const context = useToggleSidebar()
  const sidebarList = useMemo(() => {
    return type === 'user' ? SidebarItems: SideBarAdmin
  }, [type])
  return (
    <motion.aside 
    initial={false}
    animate={{
      width: context.isCollapse ? '70px' : '320px'
    }}
    transition={{
      duration: 0.1,
      ease: 'easeInOut'
    }}
    className='sidebar flex flex-col h-screen'>
      <SidebarLogo/>
      {context.isCollapse ? 
      <SidebarMenuCollapse/>
      :
      <SidebarMenu data={sidebarList}/>
    }
    </motion.aside>
  )
}

