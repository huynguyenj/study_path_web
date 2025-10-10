import Logo from '@/assets/Logo4.png'

export default function NavbarLogo() {
  return (
      <div className='flex items-center gap-5'>
            <img src={Logo} alt="Logo" className='w-10 h-10 rounded-full' />
            <p className='typography-p'>Study Path</p>
      </div>
  )
}
