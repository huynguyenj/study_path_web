import { useState, type ChangeEvent } from 'react'

export default function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
  }
  return {
      value,
      error,
      setError,
      handleChange
  }
}
