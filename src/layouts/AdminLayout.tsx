import Sidebar from '@/components/navigation/sidebar/Sidebar'
import { SidebarProvider } from '@/components/navigation/sidebar/SidebarProvider'
import DarkModeButton from '@/features/theme/components/DarkModeButton'
import { Outlet, useLocation } from 'react-router'

export default function AdminLayout() {
  const { pathname } = useLocation()
  return (
     <main className='flex'>
      <SidebarProvider>
          <Sidebar type='admin'/>
      </SidebarProvider>
        <div className='flex flex-col gap-5 w-full'>
          <div className='flex justify-between items-center py-5 px-5'>
            <h4 className='typography-h4 font-bold'>{pathname.split('/')[2].toUpperCase()}</h4>
            <div>
              <DarkModeButton/>
            </div>
          </div>
          <div className='px-5'>
            <Outlet/>
          </div>
        </div>
    </main>
  )
}
