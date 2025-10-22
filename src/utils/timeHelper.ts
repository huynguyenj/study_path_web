export const generateMinutesToTime = (totalMinutes: number) => {
   const hours = Math.floor(totalMinutes / 60)
   const minutes = totalMinutes % 60
   return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00`
}

export const generateTimeToMinutes = (time: string) => {
  const [hours, minutes] = time.split(':').map(Number)
  const totalMinutes = hours * 60 + minutes
  return totalMinutes
}

export const getTimeFromDate = (date: Date) => {
  return date.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })
}