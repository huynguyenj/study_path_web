import FilterTag from '@/components/ui/tags/FilterTag'

type CourseFilterSectionProps = {
      filterList: string[] | []
      filterChoice: number
      selectFilter: (index:number) => void

}

export default function CourseFilterSection({ filterChoice, filterList, selectFilter }: CourseFilterSectionProps) {
  return (
            <div className='flex flex-col lg:flex-row items-center'>
                  <p className='typography-p'>Phân loại</p>
                  <div className='grid grid-cols-2 md:grid-cols-3 lg:flex gap-1 px-5 py-3'>
                        {filterList?.map((filter, index) => (
                        <button className='cursor-pointer' onClick={() => selectFilter(index)}>
                              {''}
                              <FilterTag content={filter} variant={index === filterChoice ? 'primary' : 'inactive'} size='md'/>
                        </button>
                        ))}
                  </div>
            </div>
  )
}
