import { useState, type RefObject } from 'react'

export default function useRefInput(ref: RefObject<HTMLInputElement>) {
  const [value, setValue] = useState<string>('')
  if (ref?.current) {
      setValue(ref.current.value)
  }
  return {
      value
  }
}
