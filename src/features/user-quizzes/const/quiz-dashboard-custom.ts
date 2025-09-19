import { EmailIcon, ListAltIcon, QueryBuilderOutlinedIcon, StarIcon } from '@/assets/icons/mui-icon'
import type { DashboardCardProps } from '@/components/ui/cards/DashboardCard'

export const QUIZ_STATISTIC_ICON: Record<number | string, DashboardCardProps['icon']> = {
      0: ListAltIcon,
      1: EmailIcon,
      2: StarIcon,
      3: QueryBuilderOutlinedIcon
}

export const QUIZ_STATISTIC_COLOR: Record<number | string, DashboardCardProps['variant']> = {
      0: 'blue',
      1: 'green',
      2: 'purple',
      3: 'orange'
}