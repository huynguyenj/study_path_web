import { useState } from 'react'

export default function useToggle(initialState: boolean) {
  const [isToggle, setIsToggle] = useState(initialState)
  const handleToggle = () => {
    setIsToggle((prev) => !prev)
  }
  return { isToggle, handleToggle }
}
