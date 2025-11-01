import { LogoutIcon } from '@/assets/icons/mui-icon'
import Sidebar from '@/components/navigation/sidebar/Sidebar'
import { SidebarProvider } from '@/components/navigation/sidebar/SidebarProvider'
import Button from '@/components/ui/button/Button'
import LoadingScreen from '@/components/ui/loading/LoadingScreen'
import DarkModeButton from '@/features/theme/components/DarkModeButton'
import useLogout from '@/features/user/hooks/useLogout'
import { Outlet, useLocation } from 'react-router'

export default function AdminLayout() {
  const { pathname } = useLocation()
  const { handleLogout, loading } = useLogout()
  if (loading) {
    return <LoadingScreen/>
  }
  return (
     <main className='flex'>
      <SidebarProvider>
          <Sidebar type='admin'/>
      </SidebarProvider>
        <div className='flex flex-col gap-5 w-full'>
          <div className='flex justify-between items-center py-5 px-5'>
            <h4 className='typography-h4 font-bold'>{pathname.split('/')[2].toUpperCase()}</h4>
            <div className='flex items-center gap-3'>
              <DarkModeButton/>
              <Button size='circle' type='rounded' variant='primary' onClick={handleLogout}>
                <LogoutIcon/>
              </Button>
            </div>
          </div>
          <div className='px-5'>
            <Outlet/>
          </div>
        </div>
    </main>
  )
}
