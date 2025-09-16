
type TagProps = {
      variant: 'primary' | 'success' | 'danger' | 'yellow'
      content: string
}
export default function Tag({ content, variant }: TagProps) {
  return (
    <div className={styleTag(variant)}>
      <p className="typography-p">
        {content}
      </p>
    </div>
  )
}

const styleTag = (variant: TagProps['variant']) => {
      const defaults = 'px-5 py-1 w-fit rounded-[10px]'
      const variants: Record<TagProps['variant'], string> = {
            primary: 'bg-[#DBEAFE] text-[#1E5DCB]',
            danger: 'bg-[#FEE2E2] text-[#991B1B]',
            success: 'bg-[#D4F9D4] text-[#2E7D32]',
            yellow: 'bg-[#FEF9C3] text-[#854D4E]'
      }
      return `${defaults} ${variants[variant]}`
}
