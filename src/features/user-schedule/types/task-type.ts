export type TaskType = {
  id: string
  title: string
  description: string
  note?: string
  start_time: string
  end_time: string
  isCompleted: boolean
}

export type CreateTaskType = Pick<TaskType, 'title' | 'description'| 'note'> & {
  amount: number
}
export type CompetedTaskType = Pick<TaskType, 'id' | 'isCompleted'>