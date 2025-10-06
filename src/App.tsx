import { RouterProvider } from 'react-router'
import { router } from './routers/router'
import { useAppSelector } from './hooks/redux/redux-hooks'
import { useEffect } from 'react'
import { ToastContainer, Bounce } from 'react-toastify'
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
    <>
      <RouterProvider router={router}/>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
    />
    </>
  )
}

export default App
