import { ACCESS_PUBLIC_PATH } from '../router/access-path'

type NavbarItem = {
      name: string,
      path: string
}
export const NavItems: NavbarItem[] = [
      { name: 'Trang chủ', path: ACCESS_PUBLIC_PATH.HOME },
      { name: 'Liên hệ', path: ACCESS_PUBLIC_PATH.CONTACT },
      { name: 'Về chúng tôi', path: ACCESS_PUBLIC_PATH.ABOUT_US },
      { name: 'Gói thành viên', path: ACCESS_PUBLIC_PATH.MEMBERSHIP }
]