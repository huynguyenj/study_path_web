import { createContext, useState, type PropsWithChildren } from 'react'
import type { ProcessType } from '../types/schedule-type'

type ProcessTaskProviderProps = {
  process: ProcessType[]
  handleSaveProcess: (processSchedule: ProcessType[]) => void
}

const ProcessScheduleContext = createContext<ProcessTaskProviderProps | undefined>(undefined)

export function ProcessScheduleProvider({ children }: PropsWithChildren) {
  const [process, setProcess] = useState<ProcessType[]>([])
  const handleSaveProcess = (processSchedule: ProcessType[]) => {
      setProcess(processSchedule)
  }
  return (
     <ProcessScheduleContext.Provider value={{ process, handleSaveProcess }}>
       {children}
     </ProcessScheduleContext.Provider>
  )
}

export default ProcessScheduleContext