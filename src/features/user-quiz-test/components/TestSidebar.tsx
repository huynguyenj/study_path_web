
type TestSidebarProps = {
  numberOfQuestion: number
  currentIndexQuestion: number
}

export default function TestSidebar({ numberOfQuestion, currentIndexQuestion }: TestSidebarProps) {
  return (
    <div className='w-[20%] sticky top-0 h-screen flex flex-col gap-2 border-r-2 py-5 px-2'>
      <p className='typography-p font-semibold'>Câu hỏi</p>
      <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2'>
        {Array.from({ length: numberOfQuestion }).map((_, index) => (
          <p key={index} className={`w-7 h-7 flex items-center justify-center rounded-full border-1 border-solid ${currentIndexQuestion === index && 'bg-blue-400 text-white'}`}>
            {index + 1}
          </p>
        ))}
      </div>
    </div>
  )
}
