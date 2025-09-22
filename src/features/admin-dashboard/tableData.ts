import type { TableMembershipType, TopCourseType } from './types/table-type'

export const membershipTableData: TableMembershipType[] = [
      {
            userId: 1,
            membership: 'Premium',
            type: 'Yearly',
            date: '10/5/2025',
            amount: 799000
      },
       {
            userId: 2,
            membership: 'Vip',
            type: 'Monthly',
            date: '9/5/2025',
            amount: 79000
      },
       {
            userId: 3,
            membership: 'Premium',
            type: 'Yearly',
            date: '7/5/2025',
            amount: 799000
      },
       {
            userId: 4,
            membership: 'Vip',
            type: 'Monthly',
            date: '5/5/2025',
            amount: 79000
      }
]

export const topCourse: TopCourseType[] = [
      { name: 'JavaScript fundamental', price: 320000, star: 4, image: 'https://images.viblo.asia/dfafaa32-e13c-4b50-ae37-58742c1727dd.png' },
      { name: 'Cơ bản về AI và Học máy', price: 4300000, star: 4, image: 'https://sbscyber.com/hubfs/Images/BlogImages/AdobeStock_604631734.jpeg' }
]