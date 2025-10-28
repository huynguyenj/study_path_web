import { useEffect, useState } from 'react'
import type { UserManagementType } from '../types/user-type'
import type { PaginationResponse } from '@/types/data-response/response'
import { UserAdminApi } from '../api/api.user.admin'
import { toast } from 'react-toastify'

export default function useGetUserData(currentPage: number) {
  const [users, setUsers] = useState<PaginationResponse<UserManagementType>>()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true)
        const response = await UserAdminApi.getAllUser(currentPage, 5)
        setUsers(response.data)
        toast.success('Lấy danh sách người dùng thành công')
      } catch (error) {
        console.log(error)
        toast.error('Lấy danh sách người dùng thất bại')
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [currentPage])
  return {
      users,
      loading
  }
}
