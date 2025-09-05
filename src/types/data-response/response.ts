export interface ResponseStructure<T> {
      status: number,
      message: string
      data: T,
      error: string
}
