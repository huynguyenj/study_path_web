import { GpsFixedIcon, LocalLibraryIcon, PeopleIcon, QueryBuilderOutlinedIcon, ShowChartIcon, StarRateIcon } from '@/assets/icons/mui-icon'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import type { ElementType } from 'react'

export const ICON_QUESTION_SECTION: Record<string | number, ElementType<SvgIconProps>> = {
      0: LocalLibraryIcon,
      1: GpsFixedIcon,
      2: QueryBuilderOutlinedIcon,
      3: ShowChartIcon,
      4: PeopleIcon,
      5: StarRateIcon
}