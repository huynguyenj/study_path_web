import TableUserManagement from '@/features/admin-user-management/components/TableUserManagement'
import { UserManagementProvider } from '@/features/admin-user-management/context/UserManagementProvider'

export default function AdminUserManagement() {
  return (
    <div>
    <UserManagementProvider>
        <TableUserManagement/>
    </UserManagementProvider>
    </div>
  )
}
