type ChoiceContainerProps = {
      title: string
      sub: string
}
export default function ChoiceContainer({ title, sub }:ChoiceContainerProps) {
  return (
    <div className="flex flex-col gap-1 px-5 py-4 border-2 border-[#747373] rounded-2xl cursor-pointer">
      <p className="typography-p font-semibold">{title}</p>
      <p className="typography-p text-[#747373]">{sub}</p>
    </div>
  )
}
