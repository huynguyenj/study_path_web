export type ScheduleType = {
  id: string
  title: string
  start_date: Date
  end_date: Date
  amount_subject: number
  create_at: Date
}

export type SubjectType = {
   id: string
   name: string
   priority: string
}

export interface CreateScheduleType extends Omit<ScheduleType, 'id' | 'create_at'> {
   subject: Omit<SubjectType, 'id'>[]
}