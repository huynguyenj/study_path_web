import Button from '../ui/button/Button'

type PaginationSimpleProps = {
      limit: number
      currentPage: number
      goToNextPage: () => void
      goBackPage: () => void
}

export default function PaginationSimple({ currentPage, limit, goBackPage, goToNextPage }: PaginationSimpleProps) {

  return (
    <div className='flex justify-between items-center'>
      <Button type='normal' size='md' variant='inactive' onClick={goBackPage}>
        Trước đó
      </Button>
      <p>{currentPage}/{limit}</p>
      <Button type='normal' size='md' variant='primary' onClick={goToNextPage}>
        Tiếp theo
      </Button>
    </div>
  )
}
