import type { TaskType } from './types/task-type'

export const taskData: TaskType[] = [
  {
      id: 'abc',
      title:'Toán',
      description: 'Học về chủ đề hàm số',
      start_time: '13:30',
      end_time: '15:00',
      isCompleted: false,
      note: ''

   },
     {
      id: 'abcd',
      title:'Toán',
      description: 'Học về chủ đề tích phân',
      start_time: '16:30',
      end_time: '18:00',
      isCompleted: false,
      note: ''

   },
     {
      id: 'abcde',
      title:'Toán',
      description: 'Học về chủ đề nguyên hàm',
      start_time: '19:00',
      end_time: '20:30',
      isCompleted: false,
      note: ''

   }
]