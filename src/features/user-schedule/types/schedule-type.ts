import type { TaskType } from './task-type'

export type ScheduleType = {
  id: string
  title: string
  startDate: Date
  endDate: Date
  createAt: Date,
  totalTime: string
  amountSubject: number
  create_at: Date
}

export type SubjectType = {
   id: string
   name: string
   priority: string
}

export type ProcessType = {
   id: string
   date: Date
   description: string
   subjects: SubjectType[]
   processTasks: TaskType[]
}

export interface CreateScheduleType extends Omit<ScheduleType, 'id' | 'create_at'> {
   subjectListRequest: Omit<SubjectType, 'id'>[]
}
export interface ScheduleResponse extends ScheduleType {
   subjects: SubjectType[]
   processes:ProcessType[]
}