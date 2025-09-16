import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { StudyMethodType } from '../types/study-type'

type InitialStateResult = {
      resultList: StudyMethodType[]
}
const initialStudyMethodResult: InitialStateResult = {
      resultList: []
}
const studyMethodSlice = createSlice({
      initialState: initialStudyMethodResult,
      name:'study-method',
      reducers: {
            saveStudyMethodLists(state, action:PayloadAction<StudyMethodType[]>) {
                  state.resultList = action.payload
            }
      }
})

export const { saveStudyMethodLists } = studyMethodSlice.actions
export default studyMethodSlice.reducer