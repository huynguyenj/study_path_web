export type CourseType = {
      id: string | number
      title: string
      organization: string
      description: string
      star: number
      reviews: number
      image: string
      price: number
      type: string
}

export type AcknowledgeType = {
      id: string | number
      text: string
}
type Skill = Omit<AcknowledgeType, ''>

export type InstructorType = {
      id: string | number
      name: string
      description: string
      experience: string
      contact: string
}
export interface CourseDetailType extends CourseType {
      acknowledge: AcknowledgeType[]
      skills: Skill[]
      instructor: InstructorType[]
}