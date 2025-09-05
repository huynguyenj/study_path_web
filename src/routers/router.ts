import { Global_Path } from '@/const/router/path'
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
      }
])