import { ACCESS_PUBLIC_PATH } from '../router/access-path'

type NavbarItem = {
      name: string,
      path: string
}
export const NavItems: NavbarItem[] = [
      { name: 'Home', path: ACCESS_PUBLIC_PATH.HOME },
      { name: 'Contact', path: ACCESS_PUBLIC_PATH.CONTACT },
      { name: 'About us', path: ACCESS_PUBLIC_PATH.ABOUT_US }
]