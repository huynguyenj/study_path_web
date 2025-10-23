import Logo from '@/assets/images/Logo4.png'
// import Button from '../../button/Button'
// import { ArrowRightIcon } from '@/assets/icons/mui-icon'

export default function LeftSection() {
  return (
    <div className='md:w-[35%] flex flex-col gap-5 items-center md:items-start'>
      <div className='flex items-center gap-5'>
            <img src={Logo} alt="Logo" width={40} height={40} className='rounded-full' />
            <p className='typography-p'>Study Path</p>
      </div>
      <p className='typography-p'>
            Copyright &copy; 2025 study-path, All rights reserved
      </p>
      {/* <Button type='normal' variant='orange' size='md'>
            Try it now!
            <ArrowRightIcon/>
      </Button> */}
    </div>
  )
}
