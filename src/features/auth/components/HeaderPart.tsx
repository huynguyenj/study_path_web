import Logo from '@/assets/images/Logo4.png'
import { ACCESS_PUBLIC_PATH } from '@/const/router/access-path'
import { useNavigate } from 'react-router'

type HeaderPartProps = {
      title: string,
      content: string
}

export default function HeaderPart({ title, content }: HeaderPartProps) {
  const navigate = useNavigate()
  return (
     <div className='flex flex-col gap-1 items-center justify-center' >
      <div onClick={() => navigate(ACCESS_PUBLIC_PATH.HOME)}>
          <img src={Logo} alt="Logo" className='rounded-full w-15 h-15'/>
      </div>
          <h2 className='typography-h2 uppercase font-bold'>{title}</h2>
          <p className='text-center'>{content}</p>
      </div>
  )
}
