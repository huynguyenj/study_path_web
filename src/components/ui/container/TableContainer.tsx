import { type PropsWithChildren } from 'react'

type TableContainerProps = PropsWithChildren

export default function TableContainer({ children }: TableContainerProps) {
  return (
     <div className='w-full overflow-x-auto'>
      <div className='min-w-[1300px] max-w-[1200px] mx-auto'>
           {children}
      </div>
    </div>
  )
}
