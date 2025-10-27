export function toLocalISOString(date: Date) {
  const tzOffset = date.getTimezoneOffset() * 60000 // offset in ms
  const localTime = new Date(date.getTime() - tzOffset)
  return localTime.toISOString().slice(0, -1) // remove 'Z'
}
