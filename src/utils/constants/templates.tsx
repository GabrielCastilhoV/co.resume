import { useTranslation } from 'next-i18next'

import { TemplateOne, TemplateTwo } from 'components/templates/resume'
import type { FieldValues } from 'hooks'

type TemplateProps = {
  ref: React.Ref<HTMLDivElement>
  data: FieldValues
}

export const ALL_TEMPLATES = ({ data, ref }: TemplateProps) => {
  const { t } = useTranslation('common')

  return [
    {
      id: '1',
      name: 'Paris',
      layout: <TemplateOne data={data} ref={ref} />
    },

    {
      id: '2',
      name: t('berlin'),
      layout: <TemplateTwo data={data} ref={ref} />
    }
  ]
}
