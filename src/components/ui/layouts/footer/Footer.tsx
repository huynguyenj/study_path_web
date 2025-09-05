import LeftSection from './LeftSection'
import MiddleSection from './MiddleSection'
import RightSection from './RightSection'

export default function Footer() {
  return (
    <footer className="absolute bottom-0 bg-gray-300 dark:bg-gray-950 w-full px-10 py-5 flex flex-col items-center gap-10 md:flex-row">
      <LeftSection/>
      <MiddleSection/>
      <RightSection/>
    </footer>
  )
}
