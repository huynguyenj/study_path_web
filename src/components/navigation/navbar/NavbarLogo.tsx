import React from '@/assets/react.svg'
export default function NavbarLogo() {
  return (
      <div className='flex items-center gap-5'>
            <img src={React} alt="Logo" className='w-10 h-10 rounded-full' />
            <p className='typography-p'>Logo</p>
      </div>
  )
}
