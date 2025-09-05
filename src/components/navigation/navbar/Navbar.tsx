import DarkModeButton from '@/features/theme/components/DarkModeButton'
import NavbarLogo from './NavbarLogo'
import NavbarMenu from './NavbarMenu'
import NavbarResponsiveMenu from './NavbarResponsiveMenu'
import NavbarButtons from './NavbarButtons'

export default function Navbar() {
  return (
    <nav className="nav backdrop-blur-[10px] w-full md:rounded-b-[40px] flex items-center justify-between px-10 py-8 z-50">
      <NavbarLogo/>
      <NavbarMenu/>
      <NavbarResponsiveMenu/>
      <div className='hidden md:flex items-center gap-5'>
            <DarkModeButton/>
            <NavbarButtons/>
      </div>
    </nav>
  )
}
