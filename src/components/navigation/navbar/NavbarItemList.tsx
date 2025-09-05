import { NavItems } from '@/const/navbar-items/navbar'
import NavbarItem from './NavbarItem'

export default function NavbarItemList() {
  return (
      <ul className='flex flex-col md:flex-row justify-center items-center gap-5'>
            {NavItems.map((item) => (
                  <NavbarItem key={item.name} name={item.name} path={item.path} />
            ))}
      </ul>
  )
}
