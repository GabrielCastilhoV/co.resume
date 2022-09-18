export type GenericInput = {
  name: string
  placeholder?: string
  type?: 'input' | 'textarea'
}

export type ExperienceData = {
  employer?: string
  role?: string
  duration?: string
  description?: string
  isOpen?: boolean
}

export type EducationData = {
  institution?: string
  program?: string
  duration?: string
}

export type SkillData = {
  skill?: string
}

export type LinksData = {
  service?: string
  username?: string
}

export type LanguagesData = {
  language?: string
  level?: 'beginner' | 'intermediate' | 'advanced'
}
