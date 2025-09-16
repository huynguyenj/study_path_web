import NotificationButton from '@/features/notification/components/NotificationButton'
import DarkModeButton from '@/features/theme/components/DarkModeButton'
import ProfileButton from '@/features/user/components/ProfileButton'

export default function MainLayoutHeader() {
  return (
    <nav className='flex items-center justify-between font-bold border-b-1 border-b-gray-500 px-5 py-5'>
      <div>
            <h1>Study Path</h1>
      </div>
      <div className='flex gap-5 items-center'>
            <DarkModeButton/>
            <NotificationButton/>
            <ProfileButton/>
      </div>
    </nav>
  )
}
