import { type PropsWithChildren } from 'react'

type TableRowContainerProps = PropsWithChildren

export default function TableRowContainer({ children }: TableRowContainerProps) {
  return (
    <div className='card px-6 py-5 h-20 flex justify-between items-center mb-3'>
      {children}
    </div>
  )
}
