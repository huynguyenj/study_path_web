import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { CloseIcon, MenuIcon } from '@/assets/icons/mui-icon'
import DarkModeButton from '@/features/theme/components/DarkModeButton'
import NavbarButtons from './NavbarButtons'
import NavbarItemList from './NavbarItemList'
export default function NavbarResponsiveMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleOpen = () => {
    setIsOpen((prev) => !prev)
  }
  return (
    <div className='block md:hidden'>
      <button className='' onClick={handleOpen}>
        {
          isOpen ? <CloseIcon/> : <MenuIcon style={{ fontSize: 20 }}/>
        }
      </button>
      <AnimatePresence>
        {isOpen ? 
        <motion.div 
            initial={{ opacity: 0, y: -100 }}
            animate= {{ opacity:1, scale:1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className='absolute top-25 left-0 w-full h-screen z-50'    
        >
          <div className='flex flex-col justify-center items-center gap-10 py-10 bg-blue-400 dark:bg-gray-600 font-semibold rounded-b-[20px]'>
          <NavbarItemList/>
          <div className='flex flex-col gap-5 justify-center items-center'>
            <NavbarButtons/>
            <DarkModeButton/>
          </div>
          </div>
        </motion.div>
        : null
      }
      </AnimatePresence>
    </div>
  )
}
