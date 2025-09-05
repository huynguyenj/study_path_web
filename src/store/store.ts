import { configureStore } from '@reduxjs/toolkit'
import tokenReducer from '@/features/auth/auth-slice/token-slice'
import themeReducer from '@/features/theme/redux-slice/theme-slice'
export const store = configureStore({
      reducer: {
            token: tokenReducer,
            theme: themeReducer
      }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>