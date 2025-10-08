import { forwardRef, type PropsWithChildren } from 'react'

type InputProps = React.HTMLAttributes<HTMLInputElement> & PropsWithChildren & {
      placeHolder: string
      label?: string
      name: string
      error?: string
      onChange?: () => void
      size: 'sm' | 'md' | 'lg'
      variant: 'outline' | 'filled' | 'standard'|'rounded'
      type: 'text' | 'password' | 'number'
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ size, label, name, placeHolder, type, variant, children, error, ...props }, ref) => {
  return (
   <div className='relative flex flex-col gap-1'>
      {label && <p className='absolute -top-6'>{label}</p>}
      <div className={getTypeChoice(size, variant)}>
        {children}
         <input name={name} ref={ref} type={type} placeholder={placeHolder} className='w-[100%] bg-none focus:outline-none' {...props}/>
         {error && <p className='absolute right-0 typography-p text-red-500 -bottom-7 font-semibold'>{error}</p>}
      </div>
   </div>
  )
})

const getTypeChoice = (size: string, variant: string) => {
   const defaults: string = 'w-[100%] flex item-center justify-center gap-2 relative focus-within:border-b-blue-400'
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
