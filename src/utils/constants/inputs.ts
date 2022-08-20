import type { GenericInput } from 'types'
import { useTranslation } from 'next-i18next'

export const PERSONAL_INFORMATION_INPUTS = (): GenericInput[] => {
  const { t } = useTranslation('inputs')

  return [
    {
      name: 'name',
      placeholder: t('your-name')
    },

    {
      name: 'phone',
      placeholder: t('your-phone')
    },

    {
      name: 'email',
      placeholder: t('your-email')
    },

    {
      name: 'profession',
      placeholder: t('your-profession')
    }
  ]
}

export const WORK_INPUTS = (): GenericInput[] => {
  const { t } = useTranslation('inputs')

  return [
    {
      name: 'role',
      placeholder: t('your-role'),
      type: 'input'
    },

    {
      name: 'employer',
      placeholder: t('employer'),
      type: 'input'
    },

    {
      name: 'duration',
      placeholder: t('from-until'),
      type: 'input'
    },

    {
      name: 'description',
      type: 'textarea'
    }
  ]
}

export const EDUCATION_INPUTS = (): GenericInput[] => {
  const { t } = useTranslation('inputs')

  return [
    {
      name: 'program',
      placeholder: t('degree-or-program'),
      type: 'input'
    },
    {
      name: 'institution',
      placeholder: t('school-or-institution'),
      type: 'input'
    },

    {
      name: 'duration',
      placeholder: t('from-until'),
      type: 'input'
    }
  ]
}

export const SKILLS_INPUTS = (): GenericInput[] => {
  const { t } = useTranslation('inputs')

  return [
    {
      name: 'skill',
      placeholder: t('skill')
    }
  ]
}

export const LINKS_INPUTS = (): GenericInput[] => {
  const { t } = useTranslation('inputs')

  return [
    {
      name: 'username',
      placeholder: t('username')
    }
  ]
}

export const LANGUAGES_INPUTS = (): GenericInput[] => {
  const { t } = useTranslation('inputs')

  return [
    {
      name: 'language',
      placeholder: t('language')
    }
  ]
}
