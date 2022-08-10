import type { GenericInput } from 'types'

export const WORK_INPUTS: GenericInput[] = [
  {
    name: 'Work',
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
