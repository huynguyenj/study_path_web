export type TaskType = {
  id: string
  title: string
  description: string
  note?: string
  startTime: string
  endTime: string
  isCompleted: boolean
}

export type CreateTaskType = Pick<TaskType, 'title' | 'description'| 'note' | 'startTime'> & {
  amount: number
}
export type CompetedTaskType = Pick<TaskType, 'id' | 'isCompleted'>