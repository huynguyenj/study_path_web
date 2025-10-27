export type MethodDataType = {
      id: string
      name: string
      timeInfo: string
      description: string
      difficulty: string
}

export type CreateMethodDataType = Omit<MethodDataType, 'id'>
export type UpdateMethodDataType = CreateMethodDataType
export type CreateMethodConsType = {
  con: string
  methodId: string
}
export type CreateMethodProType = {
  pro: string
  methodId: string
}