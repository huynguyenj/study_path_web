type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
      variant: 'primary' | 'secondary'| 'orange'
      size: 'sm' | 'md' | 'lg'
}
export default function Button({ variant, size, ...props }: ButtonProps) {
  return (
    <button className={variantChoice(variant, size)} {...props}/>
  )
}
const variantChoice = (variant: string, size: string) => {
  const defaults:string = 'rounded-[5px] hover:opacity-70 cursor-pointer'
  const variants: Record<string, string> = {
    primary: 'bg-blue-500 font-medium text-white typography-p',
    secondary: 'bg-gray-300 font-medium text-black typography-p',
    orange: 'bg-[#E89162] font-medium text-white typography-p'
    
  }
  const sizes: Record<string, string> = {
    sm: 'px-3 py-1',
    md: 'px-5 py-2',
    lg: 'px-7 py-3'
  }
  return `${defaults} ${variants[variant]} ${sizes[size]}`
}