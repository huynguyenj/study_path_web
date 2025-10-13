import Logo from '@/assets/Logo4.png'
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
            Chúng ta mang tới dịch vụ giúp bạn học hiệu quả và hỗ trợ bạn học một cách có hệ thống. Hãy trải nghiệm dịch vụ của chúng tôi.
      </p>
      {/* <Button type='normal' variant='orange' size='md'>
            Try it now!
            <ArrowRightIcon/>
      </Button> */}
    </div>
  )
}
