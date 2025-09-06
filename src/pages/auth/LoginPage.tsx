import BackgroundImage from '@/assets/bg-auth.webp'
import LoginForm from '@/features/auth/components/LoginForm'
export default function LoginPage() {
  return (
    <div className='relative h-screen w-full flex items-center justify-center'>
        <img src={BackgroundImage} alt="Background-image" className='absolute inset-0 w-full h-full -z-10' loading='lazy'/>
        <div className='w-full min-w-[24.5rem] max-w-[41rem] mx-auto'>
          <LoginForm/>
        </div>
    </div>
  )
}
