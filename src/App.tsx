import { RouterProvider } from 'react-router'
import { router } from './routers/router'
import { useAppSelector } from './hooks/redux/redux-hooks'
import { useEffect } from 'react'

function App() {
    const theme = useAppSelector((state) => state.theme.value)
    useEffect(() => {
        if (theme === 'dark') {
              document.documentElement.classList.add('dark')
        } else {
              document.documentElement.classList.remove('dark')
        }
    }, [theme])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
