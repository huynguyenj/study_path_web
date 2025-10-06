import { Auth_Path, Global_Path, Quiz_Path } from '@/const/router/router-path'
import AdminLayout from '@/layouts/AdminLayout'
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
      },
      {
            path: '/test',
            children: [
                  {
                        path: Quiz_Path.TEST,
                        lazy: {
                              Component: async () => (await import('@/pages/user/QuizTestPage')).default
                        }
                  },
                   {
                        path: Quiz_Path.RESULT,
                        lazy: {
                              Component: async () => (await import('@/pages/user/QuizResultPage')).default
                        }
                  }
            ]
      },
      {
            path: '/admin',
            Component: AdminLayout,
            children: [
                  {
                        path: Auth_Path.ADMIN.DASHBOARD,
                        lazy: {
                              Component: async () => (await import('@/pages/admin/AdminDashboard')).default
                        }
                  },
                  {
                        path: Auth_Path.ADMIN.COURSES,
                        lazy: {
                              Component: async () => (await import('@/pages/admin/AdminCourses')).default
                        }
                  },
                  {
                        path: Auth_Path.ADMIN.USERS,
                        lazy: {
                              Component: async () => (await import('@/pages/admin/AdminUserManagement')).default
                        }
                  },
                  {
                        path: Auth_Path.ADMIN.MEMBERSHIP,
                        lazy: {
                              Component: async () => (await import('@/pages/admin/AdminMembershipManagement')).default
                        }
                  },
                  {
                        path: Auth_Path.ADMIN.METHOD_STUDY,
                        lazy: {
                              Component: async () => (await import('@/pages/admin/AdminMethodManagement')).default
                        }
                  }
            ]
      }
])