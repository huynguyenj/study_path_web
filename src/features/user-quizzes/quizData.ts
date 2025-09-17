import type { QuizType } from './types/quiz-type'

export const quizDataList: QuizType[] = [
      {
            id: 1,
            name: 'React cơ bản',
            description: 'Đây là bài kiểm tra ôn những cú pháp đơn giản.',
            total_question: 5,
            time: 10,
            type: 'easy',
            total_points: 10,
            pass_score: 5
      },
       {
            id: 2,
            name: 'Nodejs cơ bản',
            description: 'Đây là bài kiểm tra ôn những cấu trúc cơ bản.',
            total_question: 15,
            time: 30,
            type: 'medium',
            total_points: 10,
            pass_score: 5
      },
       {
            id: 3,
            name: 'Cấu trúc Website',
            description: 'Kiểm tra các rule khi thiết kế website.',
            total_question: 30,
            time: 45,
            type: 'hard',
            total_points: 10,
            pass_score: 5
      },
       {
            id: 4,
            name: 'JavaScript',
            description: 'Đây là bài kiểm tra ôn những cú pháp đơn giản.',
            total_question: 15,
            time: 10,
            type: 'easy',
            total_points: 10,
            pass_score: 5
      }
]