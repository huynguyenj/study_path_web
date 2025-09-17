type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
      variant: 'primary' | 'secondary'| 'orange'|'inactive'
      size: 'sm' | 'md' | 'lg'
}
export default function Button({ variant, size, ...props }: ButtonProps) {
  return (
    <button className={variantChoice(variant, size)} {...props}/>
  )
}
const variantChoice = (variant: string, size: string) => {
  const defaults:string = 'flex item-center justify-center gap-1 rounded-[5px] hover:opacity-70 cursor-pointer'
  const variants: Record<string, string> = {
    primary: 'bg-blue-500 font-medium text-white typography-p',
    secondary: 'bg-gray-300 font-medium text-black typography-p',
    orange: 'bg-[#E89162] font-medium text-white typography-p',
    inactive: 'bg-[#E5E7EB] text-[#CACFD5]'
    
  }
  const sizes: Record<string, string> = {
    sm: 'px-3 py-1',
    md: 'px-5 py-2',
    lg: 'px-5 py-3'
  }
  return `${defaults} ${variants[variant]} ${sizes[size]}`
}