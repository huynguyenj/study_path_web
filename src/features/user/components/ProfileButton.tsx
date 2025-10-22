import { LogoutIcon, PersonIcon } from '@/assets/icons/mui-icon'
import Button from '@/components/ui/button/Button'
import useToggle from '@/hooks/state/useToggle'
import { AnimatePresence, motion } from 'motion/react'
import useLogout from '../hooks/useLogout'
import LoadingScreen from '@/components/ui/loading/LoadingScreen'

export default function ProfileButton() {
  const { isToggle, handleToggle } = useToggle(false)
  const { handleLogout, loading } = useLogout()
  if (loading) {
    return <LoadingScreen/>
  }
  return (
   <div>
    <div className='bg-gray-400 rounded-full p-1 relative' onClick={handleToggle}>
      <PersonIcon/>
    </div>
    <AnimatePresence>
    {isToggle && 
      <motion.div
        initial= {{ scale:0 }}
        animate= {{ scale: 1 }}
        exit={{ y: 0, scale: 0 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut'
        }}
        className='fixed top-12 right-5 bg-[] p-5 rounded-2xl'
      >
        
        <Button size='circle' type='rounded' variant='inactive' onClick={handleLogout}>
          <LogoutIcon/>
          Logout
        </Button>
      </motion.div>
    
    }
    </AnimatePresence>
   </div>
  )
}
