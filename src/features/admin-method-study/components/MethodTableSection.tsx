import { useState } from 'react'
import MethodTableHeader from './MethodTableHeader'
import MethodTable from './MethodTable'
import EvaluationTable from './EvaluationTable'

export default function MethodTableSection() {
  const [tabList] = useState(['Method', 'Evaluation'])
  const [currentTab, setCurrentTab] = useState(tabList[0])
  const handleChangeTab = () => {
    setCurrentTab(currentTab === tabList[0] ? tabList[1]: tabList[0])
  }
  return (
    <div className='mb-5'>
      <MethodTableHeader changeTab={handleChangeTab} currentTab={currentTab} tabSections={tabList}/>
      {
        currentTab == 'Method' ? <MethodTable/> : <EvaluationTable/>
      }
    </div>
  )
}
