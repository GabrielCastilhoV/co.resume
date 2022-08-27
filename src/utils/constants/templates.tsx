import { TemplateOne } from 'components/templates/resume'
import type { FieldValues } from 'hooks'

type TemplateProps = {
  ref: React.Ref<HTMLDivElement>
  data: FieldValues
}

export const ALL_TEMPLATES = ({ data, ref }: TemplateProps) => {
  return [
    {
      id: '1',
      name: 'Basic Template',
      layout: <TemplateOne data={data} ref={ref} />
    },

    {
      id: '2',
      name: 'Basic Template',
      layout: <TemplateOne data={data} ref={ref} />
    },

    {
      id: '3',
      name: 'Basic Template',
      layout: <TemplateOne data={data} ref={ref} />
    },

    {
      id: '4',
      name: 'Basic Template',
      layout: <TemplateOne data={data} ref={ref} />
    }
  ]
}
