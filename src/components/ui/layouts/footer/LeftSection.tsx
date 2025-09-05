import Logo from '@/assets/react.svg'
import Button from '../../button/Button'
import { ArrowRightIcon } from '@/assets/icons/mui-icon'

export default function LeftSection() {
  return (
    <div className='md:w-[35%] flex flex-col gap-5 items-start'>
      <div className='flex items-center gap-5'>
            <img src={Logo} alt="Logo" width={30} height={30} />
            <p className='typography-p'>Logo</p>
      </div>
      <p className='typography-p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos beatae accusantium soluta placeat ad sit sapiente.
      </p>
      <Button variant='orange' size='md'>
            Try it now!
            <ArrowRightIcon/>
      </Button>
    </div>
  )
}
