import { LibraryBooksIcon, ListAltIcon, QueryBuilderOutlinedIcon, StarBorderIcon } from '@/assets/icons/mui-icon'
import type { DashboardCardProps } from '@/components/ui/cards/DashboardCard'

export const STATISTIC_ICON: Record<number | string, DashboardCardProps['icon']> = {
      0: ListAltIcon,
      1: LibraryBooksIcon,
      2: QueryBuilderOutlinedIcon,
      3: StarBorderIcon
}

export const STATISTIC_COLOR: Record<number | string, DashboardCardProps['variant']> = {
      0: 'blue',
      1: 'green',
      2: 'purple',
      3: 'orange'
}