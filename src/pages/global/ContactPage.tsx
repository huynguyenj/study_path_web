import { EmailIcon, LocalPhoneIcon, MessageIcon } from '@/assets/icons/mui-icon'
import Button from '@/components/ui/button/Button'
import { Input } from '@/components/ui/input/Input'
import { motion } from 'motion/react'

export default function ContactPage() {
  return (
    <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{
      duration: 0.5,
      ease: 'easeInOut'
    }}
    className=" w-[40%] mx-auto px-10 py-5 outline-1 mt-50 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]  dark:shadow-[5px_5px_0px_0px_rgba(255,255,255,1)] rounded-2xl">
      <div className='mb-5'>
        <h2 className='typography-h2 uppercase text-center'>Hãy liên hệ với chúng tôi</h2>
        <p className='typography-p text-center'>Liên hệ với chúng tôi để biết thêm thông tin về dịch vụ cũng như những vấn đề mà bạn gặp phải khi trải nhiệm.</p>
      </div>
      <form action="" className='flex flex-col gap-5'>
        <div>
          <Input type="text" name="email" placeHolder="email" size="md" variant="filled">
            <EmailIcon/>
          </Input>
          <Input type="text" name="phone" placeHolder="phone" size="md" variant="filled">
            <LocalPhoneIcon/>
          </Input>
          <Input type="text" name="message" placeHolder="message" size="md" variant="filled">
          <MessageIcon/>
          </Input>
        </div>
        <div className='flex justify-end'>
        <Button type='normal' size='md' variant='primary'>
          Submit
        </Button>
        </div>
      </form>
    </motion.div>
  )
}
