
type ProsConsOfMethodType = {
      id: string | number
      pro: string
}

type TechniqueMethod = {
      id: string | number
      name: string
}

export type StudyMethodType = {
      id: string | number
      name: string
      description: string
      difficulty: string
      time_info: string
      effectiveness: number
      weight: number
      pros?: ProsConsOfMethodType[]
      cons?: ProsConsOfMethodType[]
      techniques?: TechniqueMethod[]
}

export type StudyMethodComparisonType = Omit<StudyMethodType, 'description'>