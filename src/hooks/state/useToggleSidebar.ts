import SidebarContext from '@/components/navigation/sidebar/SidebarProvider'
import { useContext } from 'react'

export default function useToggleSidebar() {
  const context = useContext(SidebarContext)
  console.log('render at context')
  if (!context) {
     throw new Error('Must wrap Sidebar Provider around child component')
  }
  return context
}
