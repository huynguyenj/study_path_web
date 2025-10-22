
type ProsConsOfMethodType = {
      id: string
      pro: string
}

type TechniqueMethod = {
      id: string
      name: string
}

export type StudyMethodType = {
      id: string
      name: string
      description: string
      difficulty: string
      timeInfo: string
      effectiveness: number
      weight: number
      pros?: ProsConsOfMethodType[]
      cons?: ProsConsOfMethodType[]
      techniques?: TechniqueMethod[]
}

export type StudyMethodComparisonType = Omit<StudyMethodType, 'description'>
export type StudyMethodSubmit = {
 userId: string
 methodId: string
 isDeleted: boolean
}