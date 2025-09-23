export const ACCESS_PUBLIC_PATH = {
      HOME:'/',
      CONTACT: '/contact',
      ABOUT_US: '/about',
      LOGIN: '/auth/login',
      REGISTER: '/auth/register'
}

export const PRIVATE_PATH = {
      USER: {
            DASHBOARD: '/user/dashboard',
            STUDY_METHOD: '/user/study-method',
            SCHEDULE: '/user/schedule',
            QUIZZES: '/user/quizzes',
            COURSES: '/user/courses'
      },
      TEST: {
            QUIZ_TEST: '/test/quiz/:id',
            RESULT_QUIZ: '/test/result/:id'
      },
      ADMIN: {
            DASHBOARD: '/admin/dashboard',
            COURSES: '/admin/course',
            USERS: '/admin/user-management',
            MEMBERSHIP: '/admin/membership',
            METHOD_STUDY: '/admin/method'
      }
}
