import Button from '@/components/ui/button/Button'
import { ACCESS_PUBLIC_PATH } from '@/const/router/access-path'
import { useNavigate } from 'react-router'
import SadEmojiImage from '@/assets/images/sad-emoji.png'
export default function ErrorPage() {
 const navigate = useNavigate()
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col items-center gap-2'>
            <img src={SadEmojiImage} alt="Sad emoji" loading='lazy' width={250} height={250}/>
            <p className='text-9xl font-medium'>404</p>
            <p>Không tìm thấy trang mà bạn muốn tìm</p>
            <Button size='md' type='normal' variant='primary' onClick={() => navigate(ACCESS_PUBLIC_PATH.HOME)}>
                  Quay lại trang chủ
            </Button>
      </div>
    </div>
  )
}
