import type { MembershipPlanType } from './types/membership-type'

export const membershipData: MembershipPlanType[] = [
      {
            id: 1,
            name: 'Premium',
            fee: 799000,
            duration: '1 năm',
            features: [
                  { name: 'Rẻ hơn', description: '' },
                  { name: 'Mở khóa chức năng quiz ', description: '' }
            ]
      },
       {
            id: 2,
            name: 'Vip',
            fee: 79000,
            duration: '1 tháng',
            features: [
                  { name: 'Mở khóa chức năng quiz ', description: '' }
            ]
      },
       {
            id: 1,
            name: 'Miên phí',
            fee: 0,
            duration: 'vĩnh viễn',
            features: [
                  { name: 'Chức năng co bản', description: '' }
            ]
      }
]