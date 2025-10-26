import type { SvgIconProps } from '@mui/material/SvgIcon'
import { PRIVATE_PATH } from '../router/access-path'
import { CalendarMonthOutlinedIcon, CardMembershipIcon, DashboardIcon, HelpIcon, HomeOutlinedIcon, LightbulbOutlinedIcon, PersonIcon, PsychologyOutlinedIcon } from '@/assets/icons/mui-icon'
import type { ElementType } from 'react'

export type SidebarItemsProps = {
      icon?: ElementType<SvgIconProps>
      name: string
      path: string
}

export const SidebarItems: SidebarItemsProps[] = [
      { icon: HomeOutlinedIcon, name: 'Trang chủ', path: PRIVATE_PATH.USER.DASHBOARD },
      { icon: LightbulbOutlinedIcon, name: 'Phương pháp học', path: PRIVATE_PATH.USER.STUDY_METHOD },
      { icon: CalendarMonthOutlinedIcon, name: 'Lịch học', path: PRIVATE_PATH.USER.SCHEDULE },
      { icon: PsychologyOutlinedIcon, name: 'Bài kiểm tra', path: PRIVATE_PATH.USER.QUIZZES },
      // { icon: Inventory2OutlinedIcon, name: 'Courses', path: PRIVATE_PATH.USER.COURSES }
]

export const SideBarAdmin: SidebarItemsProps[] = [
      { icon: DashboardIcon, name: 'Dashboard', path: PRIVATE_PATH.ADMIN.DASHBOARD },
      // { icon: SensorOccupiedIcon, name: 'Courses Management', path: PRIVATE_PATH.ADMIN.COURSES },
      { icon: PersonIcon, name: 'Quản lí người dùng', path: PRIVATE_PATH.ADMIN.USERS },
      { icon: CardMembershipIcon, name: 'Gói thành viên', path: PRIVATE_PATH.ADMIN.MEMBERSHIP },
      { icon: HelpIcon, name: 'Quản lí phương pháp học', path: PRIVATE_PATH.ADMIN.METHOD_STUDY }
]