import type { SvgIconProps } from '@mui/material/SvgIcon'
import { PRIVATE_PATH } from '../router/access-path'
import { CalendarMonthOutlinedIcon, HomeOutlinedIcon, Inventory2OutlinedIcon, LightbulbOutlinedIcon, PsychologyOutlinedIcon } from '@/assets/icons/mui-icon'
import type { ElementType } from 'react'

type SidebarItemsProps = {
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