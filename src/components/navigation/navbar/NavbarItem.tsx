import { useLocation, useNavigate } from 'react-router'

type NavbarItemProps = {
      name: string,
      path: string
}
export default function NavbarItem({ name, path }: NavbarItemProps) {
  const navigate = useNavigate()
  const location = useLocation()
  return (
      <li 
          className={`typography-p uppercase px-5 py-2 rounded-2xl cursor-pointer hover:outline-solid ${location.pathname === path && 'outline-solid'}`} 
          onClick={() => navigate(path)}
      >
          {name}
      </li>
  )
}
