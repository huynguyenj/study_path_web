import { EmailIcon, FacebookIcon, InstagramIcon, LocalPhoneIcon } from '@/assets/icons/mui-icon'
import SocialItem from './SocialItem'

export default function MiddleSection() {
  return (
    <div className="md:w-[35%] h-full flex flex-col gap-3 justify-between items-center">
      <p className="typography-p font-semibold">Follow us</p>
      <div>
            <ul className="flex flex-col gap-3">
                <SocialItem isALink={true} icon={FacebookIcon} content='facebook@.com'/>
                <SocialItem isALink={true} icon={InstagramIcon} content='instagram@.com'/>
                <SocialItem isALink={false} icon={EmailIcon} content='abc@gmail.com'/>
                <SocialItem isALink={false} icon={LocalPhoneIcon} content='+84137949978'/> 
            </ul>
      </div>
    </div>
  )
}
