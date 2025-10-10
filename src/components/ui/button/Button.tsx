type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
      variant: 'primary' | 'secondary'| 'orange'|'inactive'
      size: 'sm' | 'md' | 'lg' | 'circle'
      type: 'rounded' | 'normal'
}
export default function Button({ variant, size, type, ...props }: ButtonProps) {
  return (
    <button className={variantChoice(variant, size, type)} {...props}/>
  )
}
const variantChoice = (variant: string, size: string, type: string) => {
  const defaults:string = 'typography-p flex item-center justify-center gap-1 hover:opacity-70 cursor-pointer'
  const variants: Record<string, string> = {
    primary: 'bg-blue-500 font-medium text-white',
    secondary: 'bg-gray-300 font-medium text-black',
    orange: 'bg-[#E89162] font-medium text-white',
    inactive: 'bg-[#E5E7EB] text-gray-400'
  }
  const sizes: Record<string, string> = {
    sm: 'px-3 py-1',
    md: 'px-5 py-2',
    lg: 'px-5 py-3',
    circle: 'p-2'
  }

  const types: Record<string, string> = {
    rounded: 'rounded-full',
    normal: 'rounded-[5px]'
  }
  return `${defaults} ${variants[variant]} ${sizes[size]} ${types[type]}`
}