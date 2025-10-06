import { type PropsWithChildren } from 'react'
type CardProps = PropsWithChildren & {
      variant: 'white' | 'lightYellow'
}
export default function Card({ variant, children }: CardProps) {
  return (
    <div className={styleCard(variant)}>
      {children}
    </div>
  )
}

const styleCard = (variant: CardProps['variant']) => {
      const defaults = 'card px-8 py-8 hover:-translate-y-4 transition-all duration-200'
      const variants: Record<CardProps['variant'], string> = {
            white: 'bg-white',
            lightYellow: 'bg-[#FEFAE9]'
      }
      return `${defaults} ${variants[variant]}`
}
