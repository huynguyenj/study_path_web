import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Token } from '../types/token-type'

const initialToken: Token = {
      access_token: null
}

const tokenSlice = createSlice({
      name: 'token',
      initialState: initialToken,
      reducers: {
            saveToken(state, action: PayloadAction<Token>) {
                  state.access_token = action.payload.access_token
            }
      }    
})

export const { saveToken } = tokenSlice.actions
export default tokenSlice.reducer