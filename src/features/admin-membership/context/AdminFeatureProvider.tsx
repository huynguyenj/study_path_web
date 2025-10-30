import { createContext, type PropsWithChildren } from 'react'
import useGetListFeatures from '../hooks/useGetListFeatures'
import type { MembershipFeature } from '../types/membership-type'

type AdminFeatureContextProps = {
  fetchListFeature: () => void
  listFeatures: MembershipFeature[]
  loading: boolean
}

const AdminFeatureContext = createContext<AdminFeatureContextProps | undefined>(undefined)

export function AdminFeatureProvider({ children }: PropsWithChildren) {
  const { fetchListFeature, listFeatures, loading } = useGetListFeatures()
  return (
    <AdminFeatureContext.Provider value={{ fetchListFeature, listFeatures, loading }}>
      {children}
    </AdminFeatureContext.Provider>
  )
}

export default AdminFeatureContext