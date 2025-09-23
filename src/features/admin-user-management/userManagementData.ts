import type { UserManagementType } from './types/user-type'

export const fakeUsers: UserManagementType[] = [
  {
    id: 1,
    username: 'admin_master',
    createAt: '2025-01-02T10:15:30Z',
    updateAt: '2025-02-01T09:05:20Z',
    isDeleted: false,
    roleName: 'admin'
  },
  {
    id: 2,
    username: 'john_doe',
    createAt: '2025-01-10T12:20:00Z',
    updateAt: '2025-02-12T08:45:10Z',
    isDeleted: false,
    roleName: 'user'
  },
  {
    id: 3,
    username: 'jane_smith',
    createAt: '2025-01-12T14:00:45Z',
    updateAt: '2025-02-15T11:30:00Z',
    isDeleted: false,
    roleName: 'user'
  },
  {
    id: 4,
    username: 'mike_tran',
    createAt: '2025-01-18T09:10:00Z',
    updateAt: '2025-02-20T13:15:40Z',
    isDeleted: false,
    roleName: 'user'
  },
  {
    id: 5,
    username: 'sara_nguyen',
    createAt: '2025-01-25T16:30:00Z',
    updateAt: '2025-02-22T07:55:25Z',
    isDeleted: true,
    roleName: 'user'
  }
]