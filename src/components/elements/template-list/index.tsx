import { FieldValues } from 'hooks'
import { ALL_TEMPLATES } from 'utils/constants'

import * as S from './styles'

type TemplateProps = {
  data: FieldValues
  onCloseModal: () => void
}

export const TemplateList = ({ data, onCloseModal }: TemplateProps) => {
  const templates = ALL_TEMPLATES({ data, ref: null })

  const handleTemplateChange = (templateId: string) => {
    localStorage.setItem('templateId', templateId)
    onCloseModal()
  }

  return (
    <S.Wrapper>
      {templates?.map((template) => (
        <S.Template
          key={template.id}
          role="button"
          onClick={() => handleTemplateChange(template.id)}
        >
          <S.TemplateName>{template.name}</S.TemplateName>
          <S.TemplatePreview>{template.layout}</S.TemplatePreview>
        </S.Template>
      ))}
    </S.Wrapper>
  )
}
