import type { SvgIconProps } from '@mui/material/SvgIcon'
import { PRIVATE_PATH } from '../router/access-path'
import { CalendarMonthOutlinedIcon, CardMembershipIcon, DashboardIcon, HelpIcon, HomeOutlinedIcon, Inventory2OutlinedIcon, LightbulbOutlinedIcon, PersonIcon, PsychologyOutlinedIcon, SensorOccupiedIcon } from '@/assets/icons/mui-icon'
import type { ElementType } from 'react'

export type SidebarItemsProps = {
      icon?: ElementType<SvgIconProps>
      name: string
      path: string
}

export const SidebarItems: SidebarItemsProps[] = [
      { icon: HomeOutlinedIcon, name: 'Home', path: PRIVATE_PATH.USER.DASHBOARD },
      { icon: LightbulbOutlinedIcon, name: 'Study method', path: PRIVATE_PATH.USER.STUDY_METHOD },
      { icon: CalendarMonthOutlinedIcon, name: 'Schedule', path: PRIVATE_PATH.USER.SCHEDULE },
      { icon: PsychologyOutlinedIcon, name: 'Quizzes', path: PRIVATE_PATH.USER.QUIZZES },
      { icon: Inventory2OutlinedIcon, name: 'Courses', path: PRIVATE_PATH.USER.COURSES }
]

export const SideBarAdmin: SidebarItemsProps[] = [
      { icon: DashboardIcon, name: 'Dashboard', path: PRIVATE_PATH.ADMIN.DASHBOARD },
      { icon: SensorOccupiedIcon, name: 'Sponsors', path: PRIVATE_PATH.ADMIN.SPONSORS },
      { icon: PersonIcon, name: 'User management', path: PRIVATE_PATH.ADMIN.USERS },
      { icon: CardMembershipIcon, name: 'Membership', path: PRIVATE_PATH.ADMIN.MEMBERSHIP },
      { icon: HelpIcon, name: 'Method Study', path: PRIVATE_PATH.ADMIN.METHOD_STUDY }
]