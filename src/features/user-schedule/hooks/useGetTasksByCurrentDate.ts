import { useState } from 'react'
import type { TaskType } from '../types/task-type'
import { taskData } from '../taskData'

export default function useGetTasksByCurrentDate() {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const getTaskByDate = (date: Date) => {
    console.log(date)
    setTasks(taskData)
  }
  return {
      tasks,
      getTaskByDate
  }
}
