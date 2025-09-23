import { useEffect, useState } from 'react'
import type { UserManagementType } from '../types/user-type'
import { fakeUsers } from '../userManagementData'

export default function useGetUserData() {
  const [users, setUsers] = useState<UserManagementType[]>([])
  useEffect(() => {
      setUsers(fakeUsers)
  }, [])
  return {
      users
  }
}
