import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Theme } from '../types/theme-style'

const currentTheme = localStorage.getItem('theme')
type ThemeInitial = {
      value: Theme
}

const initialTheme: ThemeInitial = {
      value: currentTheme === 'light' || 
      currentTheme === 'dark' || 
      currentTheme === 'system' 
      ? currentTheme : 'light'
}

const themeSlice = createSlice({
      name: 'theme',
      initialState: initialTheme,
      reducers: {
            saveTheme(state, action: PayloadAction<Theme>) {
                  state.value = action.payload
                  localStorage.setItem('theme', action.payload)
            }
      }
})

export const { saveTheme } = themeSlice.actions
export default themeSlice.reducer