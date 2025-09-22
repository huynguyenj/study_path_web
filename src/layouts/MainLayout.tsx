import Sidebar from '@/components/navigation/sidebar/Sidebar'
import { SidebarProvider } from '@/components/navigation/sidebar/SidebarProvider'
import { Outlet } from 'react-router'
import MainLayoutHeader from './MainLayoutHeader'

export default function MainLayout() {
  return (
    <main className='flex'>
      <SidebarProvider>
          <Sidebar type='user'/>
      </SidebarProvider>
        <div className='flex flex-col gap-5 w-full'>
          <MainLayoutHeader/>
          <div className='px-5'>
            <Outlet/>
          </div>
        </div>
    </main>
  )
}
