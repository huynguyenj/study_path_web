
export default function useLocalStorage(key: string) {
  const getItem = <T>(): T | null => {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    }
  const setItem = <T>(value: T) => {
      localStorage.setItem(key, JSON.stringify(value))
  }
  const clearItem = () => {
    localStorage.removeItem(key)
  }
  return {
      getItem,
      setItem,
      clearItem
  }
}
