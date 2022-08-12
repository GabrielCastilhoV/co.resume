import type { SelectGeneric } from 'types'

export const LINKS_SELECT: SelectGeneric = {
  name: 'service',
  options: [
    {
      value: 'linkedin',
      label: 'LinkedIn'
    },

    {
      value: 'github',
      label: 'Github'
    },

    {
      value: 'website',
      label: 'Website'
    }
  ]
}

export const LANGUAGES_SELECT: SelectGeneric = {
  name: 'level',
  options: [
    {
      value: 'beginner',
      label: 'Beginner'
    },

    {
      value: 'intermediate',
      label: 'Intermediate'
    },

    {
      value: 'advanced',
      label: 'Advanced'
    }
  ]
}
