import { useEffect, useState } from 'react'
import type { MethodDataType } from '../types/method-data-types'
import { methodTableData } from '../methodTableData'

export default function useGetMethodData() {
  const [methodTableDatas, setMethodTableDatas] = useState<MethodDataType[]>([])
  useEffect(() => {
      setMethodTableDatas(methodTableData)
  }, [])
  return {
      methodTableDatas
  }
}
