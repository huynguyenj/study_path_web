import { createContext, useEffect, type PropsWithChildren } from 'react'
import useGetUserData from '../hooks/useGetUserData'
import usePagination from '@/hooks/pagination/usePagination'
import type { UserManagementType } from '../types/user-type'
import type { PaginationResponse } from '@/types/data-response/response'

type UserManagementContextType = {
  fetchUsersByName: (username: string) => void
  loading: boolean
  users: PaginationResponse<UserManagementType> | undefined
  currentPage: number
  goBackPage: () => void
  goToNextPage: () => void
  totalPages: number
}

const UserManagementContext = createContext<UserManagementContextType| undefined>(undefined)

export function UserManagementProvider({ children }: PropsWithChildren) {
  const { currentPage, goBackPage, goToNextPage, setTotalPages, totalPages } = usePagination()
  const { fetchUsersByName, loading, users } = useGetUserData(currentPage)
  useEffect(() => {
       if (users) {
             setTotalPages(users.totalPages)
       }
    }, [currentPage, setTotalPages, users])
  return (
    <UserManagementContext.Provider value={{ fetchUsersByName, loading, goToNextPage, goBackPage, totalPages, currentPage, users }}>
      {children}
    </UserManagementContext.Provider>
  )
}
export default UserManagementContext