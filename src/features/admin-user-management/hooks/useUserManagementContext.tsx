import { useContext } from 'react'
import UserManagementContext from '../context/UserManagementProvider'

export default function useUserManagementContext() {
  const context = useContext(UserManagementContext)
  if (!context) throw new Error('Please wrap child component with provider')
  return context
}
