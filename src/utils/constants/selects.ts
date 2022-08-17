import { useTranslation } from 'next-i18next'

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

export const LANGUAGES_SELECT = (): SelectGeneric => {
  const { t } = useTranslation('inputs')

  return {
    name: 'level',
    options: [
      {
        value: 'beginner',
        label: t('beginner')
      },

      {
        value: 'intermediate',
        label: t('intermediate')
      },

      {
        value: 'advanced',
        label: t('advanced')
      }
    ]
  }
}
