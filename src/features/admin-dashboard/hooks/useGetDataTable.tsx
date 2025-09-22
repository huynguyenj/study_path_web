import { useEffect, useState } from 'react'
import type { TableMembershipType } from '../types/table-type'
import { membershipTableData } from '../tableData'

export default function useGetDataTable() {
  const [membershipData, setMembershipData] = useState<TableMembershipType[]>([])
  useEffect(() => {
      setMembershipData(membershipTableData)
  }, [])
  return {
      membershipData
  }
}
