export const formatDate = (date: Date) => {
      const month = date.getMonth() + 1
      const day = date.getDay()
      const year = date.getFullYear()
      return `${day}-${month}-${year}`
}