
export default function useLocalStorage(key: string) {
  const getItem = (key: string) => {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    }
  const setItem = <T>(value: T) => {
      localStorage.setItem(key, JSON.stringify(value))
  }
  return {
      getItem,
      setItem
  }
}
