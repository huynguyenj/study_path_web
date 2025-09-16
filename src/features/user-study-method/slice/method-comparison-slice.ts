import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { StudyMethodComparisonType } from '../types/study-type'

type InitialStateComparison = {
      resultList: StudyMethodComparisonType[]
}
const initialStudyMethodResult: InitialStateComparison = {
      resultList: []
}
const studyMethodComparisonSlice = createSlice({
      initialState: initialStudyMethodResult,
      name:'study-method-comparison',
      reducers: {
            saveStudyMethodComparisonLists(state, action:PayloadAction<StudyMethodComparisonType[]>) {
                  state.resultList = action.payload
            }
      }
})

export const { saveStudyMethodComparisonLists } = studyMethodComparisonSlice.actions
export default studyMethodComparisonSlice.reducer