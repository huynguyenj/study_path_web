
type EventLabelProps = {
      title: string
      sub: string
}

export default function EventLabel({ title, sub }:EventLabelProps) {
  return (
    <div className='typography-p px-2 py-2 border-l-3 border-l-[#1D89EA] dark:border-l-purple-500'>
      <p>{title}</p>
      <p className='ml-5 text-[#747373]'>{sub}</p>
    </div>
  )
}
