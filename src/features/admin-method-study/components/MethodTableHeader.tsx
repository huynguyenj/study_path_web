import Button from '@/components/ui/button/Button'
type MethodTableHeaderProps = {
      tabSections: string[]
      currentTab: string
      changeTab: () => void
}

export default function MethodTableHeader({ tabSections, currentTab, changeTab }: MethodTableHeaderProps) {

  return (
    <div className='flex items-center gap-2'>   
      {tabSections.map((tab) => (
            <Button type='normal' key={tab} size='md' variant={currentTab === tab ? 'primary' : 'inactive'} onClick={changeTab}>
                  {tab}
            </Button>
      ))}

    </div>
  )
}
