import { createContext, useState, type PropsWithChildren } from 'react'

type SidebarContextProps = {
  isCollapse: boolean,
  toggleCollapse: () => void
}
const SidebarContext = createContext<SidebarContextProps | undefined>(undefined)

type SidebarProviderProps = PropsWithChildren
export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isCollapse, setIsCollapse] = useState<boolean>(false)
  const toggleCollapse = ():void => setIsCollapse((prev) => !prev)
  return (
      <SidebarContext.Provider value={{ isCollapse, toggleCollapse }}>
            {children}
      </SidebarContext.Provider>
  )
}

export default SidebarContext
