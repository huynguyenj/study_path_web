import SidebarLogo from './SidebarLogo'
import SidebarMenu from './SidebarMenu'
import useToggleSidebar from '@/hooks/state/useToggleSidebar'
import SidebarMenuCollapse from './SidebarMenuCollapse'
import { motion } from 'motion/react'

export default function Sidebar() {
  const context = useToggleSidebar()
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
      <SidebarMenu/>
    }
    </motion.aside>
  )
}

