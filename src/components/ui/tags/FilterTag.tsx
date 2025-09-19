import { type PropsWithChildren } from 'react'

type FilterTagProps = PropsWithChildren & {
      variant: 'primary' | 'inactive'
      content: string
      size: 'sm'|'md'|'lg'
}

export default function FilterTag({ variant, content, children, size }: FilterTagProps) {
  return (
    <div className={styleFilterTag(variant, size)}>
      {children}
      {content}
    </div>
  )
}

const styleFilterTag = (variant: FilterTagProps['variant'], size: FilterTagProps['size']) => {
      const defaults = 'w-fit flex gap-2 rounded-[5px] typography-p'
      const variants: Record<FilterTagProps['variant'], string> = {
            primary: 'bg-[#1D89EA] text-white',
            inactive: 'bg-[#E5E7EB] text-black'
      }
      const sizes: Record<FilterTagProps['size'], string> = {
            sm: 'px-2 py-1',
            md: 'px-3 py-2',
            lg: 'px-5 py-5'
      }
      return `${defaults} ${variants[variant]} ${sizes[size]}`
}
