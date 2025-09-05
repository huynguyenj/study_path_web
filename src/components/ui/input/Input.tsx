import { forwardRef, type PropsWithChildren } from 'react'

type InputProps = React.HTMLAttributes<HTMLInputElement> & PropsWithChildren & {
      placeHolder: string
      name: string
      error?: string
      onChange?: () => void
      size: 'sm' | 'md' | 'lg'
      variant: 'outline' | 'filled' | 'standard'
      type: 'text' | 'password' | 'number'
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ size, name, placeHolder, type, variant, children, ...props }, ref) => {
  return (
      <div className={getTypeChoice(size, variant)}>
        {children}
         <input name={name} ref={ref} type={type} placeholder={placeHolder} className='w-[100%] focus:outline-none ' {...props}/>
      </div>
  )
})

const getTypeChoice = (size: string, variant: string) => {
   const defaults: string = 'w-[100%] flex gap-3 '
   const variants:Record<string, string> = {
      outline: 'outline-1 rounded-[2px] focus-within:outline-blue-400',
      filled: 'border-b-1 bg-[#2F3234] focus-within:border-b-blue-400',
      standard: 'border-b-1 focus-within:border-b-blue-400'
   }
   const sizes: Record<string, string> = {
      sm: 'px-1 py-2',
      md: 'px-2 py-3',
      lg: 'px-3 py-4'
   }
   return `${defaults} ${sizes[size]} ${variants[variant]}`
}
