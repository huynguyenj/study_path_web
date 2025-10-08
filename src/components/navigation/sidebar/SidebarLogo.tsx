import { DoubleArrowOutlinedIcon } from '@/assets/icons/mui-icon'
import Logo from '@/assets/Logo4.png'
import useToggleSidebar from '@/hooks/state/useToggleSidebar'

export default function SidebarLogo() {
  const context = useToggleSidebar()
  return (
    <div className='flex gap-2 justify-between items-center border-b-1 py-5 border-solid border-gray-500 relative'>
      {!context.isCollapse && 
      <div className='flex items-center gap-5'>
        <img src={Logo} alt="Logo" loading='lazy' className='w-10 h-10 rounded-full' />
        <p className='typography-p'>Study path</p>
      </div>}
        <div onClick={context.toggleCollapse} className={`dark:bg-[rgba(255,255,255,0.1)] w-fit p-2 mx-3 rounded-full ${context.isCollapse ? 'rotate-[0deg]': 'rotate-[180deg]'} transition-all duration-200 ease-in-out cursor-pointer`}>
        <DoubleArrowOutlinedIcon/>
      </div>
      </div>
  )
}
