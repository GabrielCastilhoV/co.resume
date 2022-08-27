/* eslint-disable react/display-name */
import { forwardRef } from 'react'

import { FieldValues } from 'hooks'
import { ALL_TEMPLATES } from 'utils/constants'

import * as S from './styles'

type TemplateProps = {
  ref: React.Ref<HTMLDivElement>
  data: FieldValues
  onCloseModal: () => void
}

export const TemplateList: React.FC<TemplateProps> = forwardRef(
  (props, ref) => {
    const templates = ALL_TEMPLATES({ data: props.data, ref })

    const handleTemplateChange = (templateId: string) => {
      localStorage.setItem('templateId', templateId)
      props.onCloseModal()
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
)
