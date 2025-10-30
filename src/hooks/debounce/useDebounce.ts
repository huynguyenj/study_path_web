import { useEffect, useState } from 'react'

export default function useDebounce(text: string, delay: number) {
  const [debounceText, setDebounceText] = useState('')
  useEffect(() => {
  const timeout = setTimeout(() => {
            setDebounceText(text)
   }, delay)
   return () => clearTimeout(timeout)
  }, [text, delay])
  return debounceText
}
