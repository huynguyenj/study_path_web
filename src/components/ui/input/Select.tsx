import type { SvgIconProps } from '@mui/material/SvgIcon'
import React, { forwardRef, type ElementType } from 'react'

type SelectProps = React.HTMLAttributes<HTMLSelectElement> & {
      options: Record<'name' | 'value', any>[]
      name: string
      id?:string
      error?: string
      icon?: ElementType<SvgIconProps>
      size: 'sm' | 'md' | 'lg'
      variant: 'outline' | 'filled' | 'standard'|'rounded'
      value?: string | number
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({ id, name, options, size, variant, value, ...props }, ref) => {
  return (
    <select value={value} ref={ref} name={name} id={id} className={getTypeChoice(size, variant)} {...props}>
      {/* <option value="" className='flex gap-2'>
            {name}
      </option> */}
      {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
                  {opt.name}
            </option>
      ))}
    </select>
  )
})

const getTypeChoice = (size: string, variant: string) => {
   const defaults: string = 'w-fit focus-within:border-b-blue-400 dark:bg-black'
   const variants:Record<string, string> = {
      outline: 'outline-1 rounded-[2px]',
      filled: 'border-b-1 dark:bg-[#2F3234]',
      standard: 'border-b-1',
      rounded: 'border-1 border-gray-primary rounded-[15px]'
   }
   const sizes: Record<string, string> = {
      sm: 'px-3 py-2',
      md: 'px-3 py-3',
      lg: 'px-3 py-4'
   }
   return `${defaults} ${sizes[size]} ${variants[variant]}`
}
