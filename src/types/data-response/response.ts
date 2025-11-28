export interface ResponseStructure<T> {
      status: number,
      message: string
      data: T,
      error: string
}

export interface PaginationResponse<T> {
    currentPage: number
    pageSize: number
    totalCount: number
    totalPages: number
    items: T[]  
}

export interface ErrorResponse{ 
    Message: string
}