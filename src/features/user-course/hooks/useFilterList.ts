import { useEffect, useState } from 'react'
import { filterList } from '../fitlerData'

export default function useFilterList() {
  const [currentListFilter, setCurrentListFilter] = useState<string[]>([])
  const [filterChoice, setFilterChoice] = useState(0)
  useEffect(() => {
      setCurrentListFilter(filterList)
  }, [])
  const handleFilterChoice = (filterIndex: number) => {
      setFilterChoice(filterIndex)
  }
  return {
      currentListFilter,
      filterChoice,
      handleFilterChoice
  }
}
