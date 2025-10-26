import Navbar from '@/components/navigation/navbar/Navbar'
import Footer from '@/components/ui/layouts/footer/Footer'
import { Outlet } from 'react-router'


export default function PageLayout() {
  return (
      <div className='flex flex-col justify-between'>
            <Navbar/>
            <main className='mb-20 min-h-screen'>
                  <Outlet/>
            </main>
                  <Footer/>
      </div>
)
}
