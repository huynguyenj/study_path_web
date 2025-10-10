import { useCallback, useState } from 'react'
type Error<T> = Partial<Record<keyof T, string>>

export default function useFormCheck<T extends Record<string, any>>() {
  const [errors, setErrors] = useState<Error<T>>({})
  const validate = useCallback((formData: Partial<T>, rules: Partial<Record<keyof T, RegExp | ''>>) => {
    const newError: Error<T> = {}
    for (const key in rules) {
      const regex = rules[key]
      const value = formData[key]
      if (!value) {
        newError[key] = `Không được để trống ô ${key}`
      } else if (regex && !regex.test(value)) {
        newError[key] = 'Thông tin nhập không hợp lệ'
      }
    }
    setErrors(newError)
    return Object.keys(newError).length === 0
  }, [])
  return {
      errors,
      validate
   }
}

