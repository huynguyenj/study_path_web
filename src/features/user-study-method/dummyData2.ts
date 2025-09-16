import type { StudyMethodComparisonType, StudyMethodType } from "./types/study-type"

export const studyMethodRecommendation: StudyMethodType[] = [
      {
            id: 1,
            name: 'Phương pháp Pomodoro',
            description: 'Làm việc tập trung trong khoản thời gian 25 phút với những khoảng nghỉ ngắn',
            difficulty: 'hard',
            time_info: '2-4 giờ mỗi ngày',
            effectiveness: 85,
            weight: 50,
            pros: [
                  {
                        id: 1,
                        pro: 'Cải thiện tập trung'
                  },
                  {
                        id: 2,
                        pro: 'Quản lí thời gian tốt hơn'
                  },
                  {
                        id: 3,
                        pro: 'Giảm kiệt sức'
                  }
            ],
            cons: [],
            techniques: [
                  {
                        id: 1,
                        name: 'Các buổi học tập trung kéo dài phút'
                  },
                  {
                        id: 2,
                        name: 'Nghỉ giải lao'
                  },
                  {
                        id: 3,
                        name: 'Nghỉ giải lao dài hơn sau mỗi buổi học '
                  }
            ]
      },
       {
            id: 2,
            name: 'Phương pháp thu hồi tích cực',
            description: 'Hãy thường xuyên tự kiểm tra thay vì đọc thụ động',
            difficulty: 'medium',
            time_info: '2-4 giờ mỗi ngày',
            effectiveness: 92,
            weight: 40,
            pros: [
                  {
                        id: 4,
                        pro: 'Khả năng giữ kiến thức tốt hơn'
                  },
                  {
                        id: 5,
                        pro: 'Trí nhớ mạnh hơn'
                  },
                  {
                        id: 6,
                        pro: 'Cải thiện sự hiểu biết'
                  }
            ],
            cons: [],
            techniques: [
                  {
                        id: 4,
                        name: 'Tự kiểm tra'
                  },
                  {
                        id: 5,
                        name: 'Flashcards'
                  },
                  {
                        id: 6,
                        name: 'Cải thiện sự hiểu biết'
                  }
            ]
      },
      {
            id: 3,
            name: 'Phương pháp Feynman',
            description: 'Học bằng cách giảng dạy các khái niệm bằng những thuật ngữ đơn giản',
            difficulty: 'easy',
            time_info: '1-2 giờ cho mỗi chủ đề',
            effectiveness: 90,
            weight: 20,
            pros: [
                  {
                        id: 7,
                        pro: 'Hiểu biết sâu sắc'
                  },
                  {
                        id: 8,
                        pro: 'Suy nghĩ rõ ràng'
                  },
                  {
                        id: 9,
                        pro: 'Xây dựng niềm tin'
                  }
            ],
            cons: [],
            techniques: [
                  {
                        id: 7,
                        name: 'Giải thích bằng thuật ngữ đơn giản'
                  },
                  {
                        id: 8,
                        name: 'Xác định lỗ hổng kiến thức'
                  },
                  {
                        id: 9,
                        name: 'Sử dụng sự tương tự'
                  }
            ]
      }    
]

export const compareStudyMethod: StudyMethodComparisonType[] = [
         {
            id: 1,
            name: 'Phương pháp Pomodoro',
            difficulty: 'hard',
            time_info: '2-4 giờ mỗi ngày',
            effectiveness: 85,
            weight: 50
      },
       {
            id: 2,
            name: 'Phương pháp thu hồi tích cựcv',
            difficulty: 'medium',
            time_info: '2-4 giờ mỗi ngày',
            effectiveness: 92,
            weight: 40
      },
      {
            id: 3,
            name: 'Phương pháp Feynman',
            difficulty: 'easy',
            time_info: '1-2 giờ cho mỗi chủ đề',
            effectiveness: 90,
            weight: 20
      },
      {
            id: 4,
            name: 'Phương pháp Spaced',
            difficulty: 'medium',
            time_info: '30-60 phút cho mỗi ngày',
            effectiveness: 88,
            weight: 15
      },
      {
            id: 5,
            name: 'Phương pháp Mind',
            difficulty: 'easy',
            time_info: '45-90 phút cho mỗi buổi',
            effectiveness: 78,
            weight: 0
      },
      {
            id: 6,
            name: 'Phương pháp Interleaving',
            difficulty: 'hard',
            time_info: '2-3 giờ cho mỗi buổi',
            effectiveness: 76,
            weight: 0
      }  
]