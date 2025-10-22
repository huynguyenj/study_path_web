
export type SubjectFutureType = {
  id: string
  name: string
  priority: string
}

export type NearProcessTaskCompleteType = {
  id: string
  title: string
  description: string
  startTime: string
  endTime: string
}

export type UserDashboardStatistic = {
  totalQuizUserAttemp: number
  totalTimeProcessTaskComplete: number
  streak: number
  nearProcessTaskComplete: NearProcessTaskCompleteType[]
  subjectFuture: SubjectFutureType[]
}