import { EmailIcon, FacebookIcon } from '@/assets/icons/mui-icon'
import SocialItem from './SocialItem'

export default function MiddleSection() {
  return (
    <div className="md:w-[35%] h-full flex flex-col gap-3 justify-between items-center">
      <p className="typography-p font-semibold">Follow us</p>
      <div>
            <ul className="flex flex-col gap-3">
                <SocialItem isALink={true} icon={FacebookIcon} link='https://www.facebook.com/share/1GBw7AY3pz/?mibextid=wwXIfr' content='StudyPath'/>
                <SocialItem isALink={false} icon={EmailIcon} content='StudyPath23@gmail.com'/>
            </ul>
      </div>
    </div>
  )
}
