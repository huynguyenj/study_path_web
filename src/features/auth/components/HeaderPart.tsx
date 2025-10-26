import Logo from '@/assets/images/Logo4.png'

type HeaderPartProps = {
      title: string,
      content: string
}

export default function HeaderPart({ title, content }: HeaderPartProps) {
  return (
     <div className='flex flex-col gap-1 items-center justify-center'>
          <img src={Logo} alt="Logo" className='rounded-full w-15 h-15'/>
          <h2 className='typography-h2 uppercase font-bold'>{title}</h2>
          <p className='text-center'>{content}</p>
      </div>
  )
}
