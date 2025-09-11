
import HeroSection from '@/components/page-components/home/HeroSection'
import Section1 from '@/components/page-components/home/Section1'
import Section2 from '@/components/page-components/home/Section2'

export default function HomePage() {

  return (
    <div className='flex flex-col gap-15'>
     <HeroSection/>
     <Section1/>
     <Section2/>
    </div>
  )
}

