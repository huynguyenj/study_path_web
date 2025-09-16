import { compareStudyMethod, studyMethodRecommendation } from '../dummyData2'
import { useAppDispatch } from '@/hooks/redux/redux-hooks'
import { saveStudyMethodLists } from '../slice/method-slice'
import { saveStudyMethodComparisonLists } from '../slice/method-comparison-slice'

export default function useGetRecommendMethod() {
  const dispatch = useAppDispatch()
  const getStudyMethodRecommend = async () => {
      dispatch(saveStudyMethodLists(studyMethodRecommendation))
      dispatch(saveStudyMethodComparisonLists(compareStudyMethod))
  }
  return { getStudyMethodRecommend }
}
