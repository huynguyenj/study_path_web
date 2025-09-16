import { configureStore } from '@reduxjs/toolkit'
import tokenReducer from '@/features/auth/auth-slice/token-slice'
import themeReducer from '@/features/theme/redux-slice/theme-slice'
import studyMethodResultReducer from '@/features/user-study-method/slice/method-slice'
import studyMethodComparisonReducer from '@/features/user-study-method/slice/method-comparison-slice'
export const store = configureStore({
      reducer: {
            token: tokenReducer,
            theme: themeReducer,
            studyMethodResult: studyMethodResultReducer,
            methodComparison: studyMethodComparisonReducer
      }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>