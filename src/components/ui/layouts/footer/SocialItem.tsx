import type { SvgIconProps } from '@mui/material/SvgIcon'

type SocialItemProps = {
      icon: React.ElementType<SvgIconProps>
      isALink: boolean
      content: string
      link?: string
}
export default function SocialItem({ icon: Icon, isALink, content, link }: SocialItemProps) {
  return (
    <li className='flex items-center gap-3'>
      <div className='bg-black/30 dark:bg-white/30 rounded-full p-1'>
            <Icon/>
      </div>
      { isALink ? 
            <a href={link}>{content}</a>
      : 
            <p>{content}</p>
      }
    </li>
  )
}
