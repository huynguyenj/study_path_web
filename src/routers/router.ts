import { Auth_Path, Global_Path } from '@/const/router/path'
import MainLayout from '@/layouts/MainLayout'
import PageLayout from '@/layouts/PageLayout'
import { createBrowserRouter } from 'react-router'

export const router = createBrowserRouter([
      {
            path: '/',
            Component: PageLayout,
            children: [
                  {
                        index: true,
                        lazy: {
                           Component: async () => (await import('@/pages/global/HomePage')).default
                        } 
                  },
                  {
                        path: Global_Path.CONTACT,
                        lazy: {
                           Component: async () => (await import('@/pages/global/ContactPage')).default
                        }
                  },
                  {
                        path: Global_Path.ABOUT_US,
                        lazy: {
                           Component: async () => (await import('@/pages/global/AboutUsPage')).default
                        }
                  }
            ]
      },
      {
            path:'/auth',
            children: [
                   {
                       path: Global_Path.LOGIN,
                       lazy: {
                           Component: async () => (await import('@/pages/auth/LoginPage')).default
                       } 
                  },
                  {
                       path: Global_Path.REGISTER,
                       lazy: {
                           Component: async () => (await import('@/pages/auth/RegisterPage')).default
                       } 
                  }
            ]
      },

      {
            path:'/user',
            Component: MainLayout,
            children: [
                  {
                        path: Auth_Path.USER.DASHBOARD,
                        lazy: {
                              Component: async () => (await import('@/pages/user/DashboardPage')).default
                        }
                  },
                   {
                        path: Auth_Path.USER.STUDY_METHOD,
                        lazy: {
                              Component: async () => (await import('@/pages/user/StudyMethodPage')).default
                        }
                  },
                   {
                        path: Auth_Path.USER.SCHEDULE,
                        lazy: {
                              Component: async () => (await import('@/pages/user/SchedulePage')).default
                        }
                  },
                   {
                        path: Auth_Path.USER.QUIZZES,
                        lazy: {
                              Component: async () => (await import('@/pages/user/QuizPage')).default
                        }
                  },
                   {
                        path: Auth_Path.USER.COURSES,
                        lazy: {
                              Component: async () => (await import('@/pages/user/CoursesPage')).default
                        }
                  }

            ]
      }
])