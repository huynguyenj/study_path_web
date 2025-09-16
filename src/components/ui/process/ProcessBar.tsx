type ProcessBarProps = {
      variant: 'success'
      percent: number | string
}
export default function ProcessBar({ variant, percent }: ProcessBarProps) {
  return (
    <div className="relative w-[100%] h-2 rounded-2xl bg-[#D9D9D9]">
      <span className={styleProcessBar(variant)} style={{width: `${percent}%` }}></span>
    </div>
  )
}

const styleProcessBar = (variant: ProcessBarProps['variant']) => {
      const defaults = 'absolute left-0 top-0 bottom-0 rounded-2xl'
      const variants: Record<ProcessBarProps['variant'], string> = {
            success: 'bg-[#16A34A]'
      }
      return `${defaults}  ${variants[variant]}`
}