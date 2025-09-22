import { ImportContactsIcon, PaymentsIcon, PersonIcon, SensorOccupiedIcon } from '@/assets/icons/mui-icon'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import type { ElementType } from 'react'

export const STATISTIC_CHOICE_CLR: Record<number, 'blue' | 'yellow'| 'orange'| 'purple'> = {
      0: 'blue',
      1: 'yellow',
      2: 'orange',
      3: 'purple'
}
export const STATISTIC_CHOICE_ICON: Record<number, ElementType<SvgIconProps>> = {
      0: PersonIcon,
      1: ImportContactsIcon,
      2: PaymentsIcon,
      3: SensorOccupiedIcon
}