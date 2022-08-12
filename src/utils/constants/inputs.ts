import type { GenericInput } from 'types'

export const PERSONAL_INFORMATION_INPUTS: GenericInput[] = [
  {
    name: 'name',
    placeholder: 'Your name'
  },

  {
    name: 'phone',
    placeholder: 'Your phone'
  },

  {
    name: 'email',
    placeholder: 'Your email'
  },

  {
    name: 'profession',
    placeholder: 'Your profession'
  }
]

export const WORK_INPUTS: GenericInput[] = [
  {
    name: 'role',
    placeholder: 'Position or role',
    type: 'input'
  },

  {
    name: 'employer',
    placeholder: 'Employer',
    type: 'input'
  },

  {
    name: 'duration',
    placeholder: 'From - Until',
    type: 'input'
  },

  {
    name: 'description',
    type: 'textarea'
  }
]

export const EDUCATION_INPUTS: GenericInput[] = [
  {
    name: 'program',
    placeholder: 'Degree or program',
    type: 'input'
  },
  {
    name: 'institution',
    placeholder: 'School or Institution',
    type: 'input'
  },

  {
    name: 'duration',
    placeholder: 'From - Until',
    type: 'input'
  },

  {
    name: 'description',
    type: 'textarea'
  }
]

export const SKILLS_INPUTS: GenericInput[] = [
  {
    name: 'skill',
    placeholder: 'Skill'
  }
]

export const LINKS_INPUTS: GenericInput[] = [
  {
    name: 'url',
    placeholder: 'URL'
  }
]

export const LANGUAGES_INPUTS: GenericInput[] = [
  {
    name: 'language',
    placeholder: 'Language'
  }
]
