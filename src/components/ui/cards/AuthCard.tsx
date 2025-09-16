import type { PropsWithChildren } from 'react'

type AuthCard = PropsWithChildren
export default function AuthCard({ children }: AuthCard) {
  return (
    <div className='glassmorphism px-15 py-10 rounded-[10px] mx-10'>
      {children}
    </div>
  )
}
