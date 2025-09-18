import { useEffect, useState } from 'react'
import type { ResultTestType } from '../types/result-test-type'
import { resultTestData } from '../resultTestData'

export default function useGetResult() {
  const [result, setResult] = useState<ResultTestType>()
  useEffect(() => {
      setResult(resultTestData)
  }, [])
  return {
      result
  }
}
