import { StarBorderIcon, StarIcon } from '@/assets/icons/mui-icon'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import type { ElementType } from 'react'

type StarEvaluationProps = {
   limitStar: number
   dataNumber: number
}
export default function StarEvaluation({ limitStar, dataNumber }: StarEvaluationProps) {
  const calculateNumberStar = ():ElementType<SvgIconProps>[] => {
      let count = 1
      let numberStarAvailable = 0
      const listDefaultStars: ElementType<SvgIconProps>[] = new Array(limitStar).fill(StarBorderIcon)
      // Case data number is a percent 
      if (dataNumber > limitStar) {
        numberStarAvailable = Math.floor((dataNumber * limitStar)/100)
      } 
      // Case data number is a star
      else {
        numberStarAvailable = dataNumber
      }
      while (count <= numberStarAvailable) {
        listDefaultStars[count - 1] = StarIcon
        count++
      }
      return listDefaultStars
  }

  return (
    <div>
      {calculateNumberStar().map((Icon, i) => (
          <Icon key={i} sx={{ color:'#f8b400' }}/>
      ))}
    </div>
  )
}
