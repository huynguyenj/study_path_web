import AuthCard from '@/components/ui/cards/AuthCard'
import type { PropsWithChildren } from 'react'
import HeaderPart from './HeaderPart'

type FormStructureProps = PropsWithChildren
export default function FormStructure({ children }: FormStructureProps) {
  return (
    <AuthCard>
        <HeaderPart title='Welcome' content='Sign in to experience more our feature'/>
        {children}
    </AuthCard>
  )
}
