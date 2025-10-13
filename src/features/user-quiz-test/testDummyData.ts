import type { QuizTestType } from './types/quiz-test-type'


export const quizDataList: QuizTestType = 
      {
            id: 1,
            name: 'React cơ bản',
            total_question: 5,
            time: 10,
            type: 'easy',
            questions: [
                  {
                        id: '1',
                        name: 'Reactjs là gì ?',
                        point: 2,
                        choices: [
                              { id: '1', name: 'Đó là thự viên UI' },
                              { id: '2', name: 'Đó là 1 framework của Nodejs' },
                              { id: '3', name: 'Là 1 tool dùng để style' },
                              { id: '4', name: 'Là một phần của Java' }
                        ]
                  },
                  {
                        id: '2',
                        name: 'Reactjs được tạo ra để giải quyết vấn đề gì ?',
                        point: 2,
                        choices: [
                              { id: '5', name: 'Hỗ trợ ta code nhanh hơn' },
                              { id: '6', name: 'Với công dụng là tách component khiến cho code của chúng ta dễ bảo trì và mở rộng hơn.' },
                              { id: '7', name: 'Không giải quyết được điều gì cả.' },
                              { id: '8', name: 'Không có tác dụng gì.' }
                        ]
                  },
                  {
                        id: '3',
                        name: 'Reactjs có phải là UI library duy nhất ?',
                        point: 2,
                        choices: [
                              { id: '9', name: 'True' },
                              { id: '10', name: 'False' }
                        ]
                  },
                  {
                        id: '4',
                        name: 'Reactjs được tạo ra năm nào ?',
                        point: 2,
                        choices: [
                              { id: '11', name: '2013' },
                              { id: '12', name: '2020' },
                              { id: '13', name: '2018' },
                              { id: '14', name: '2015' }
                        ]
                  },
                  {
                        id: '5',
                        name: 'Reactjs được phát triển bởi tổ chức nào ?',
                        point: 2,
                        choices: [
                              { id: '15', name: 'Tesla' },
                              { id: '16', name: 'Apple' },
                              { id: '17', name: 'Google' },
                              { id: '18', name: 'Facebook' }
                        ]
                  }
            ]
      }
