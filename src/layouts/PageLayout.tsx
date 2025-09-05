import Navbar from '@/components/navigation/navbar/Navbar'
import Footer from '@/components/ui/layouts/footer/Footer'
import { Outlet } from 'react-router'


export default function PageLayout() {
  return (
      <div>
            <Navbar/>
            <main>
                  <Outlet/>
            </main>
            <Footer/>
      </div>
)
}
