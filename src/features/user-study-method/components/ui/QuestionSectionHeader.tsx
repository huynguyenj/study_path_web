
type QuestionSectionHeaderProps = {
      title?: string
      sub?: string
}
export default function QuestionSectionHeader({ title, sub }:QuestionSectionHeaderProps) {
  return (
    <div className='flex flex-col gap-1'>
      <h2 className='typography-h2 font-semibold'>{title}</h2>
      <p className='typography-p'>{sub}</p>
    </div>
  )
}
