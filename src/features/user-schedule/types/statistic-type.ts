export type StatisticType = {
      title: string
      number: string | number
}
export type ScheduleStatisticResponse = {
  taskOnDay: number
  totalTaskOfWeek: number
  totalTimeOfDay: number
  percentComplete: number
}