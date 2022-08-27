/* eslint-disable react/display-name */
import { forwardRef } from 'react'

import { FieldValues } from 'hooks'
import { ALL_TEMPLATES } from 'utils/constants'

import * as S from './styles'

type TemplateProps = {
  ref: React.Ref<HTMLDivElement>
  data: FieldValues
}

export const ActiveTemplate: React.FC<TemplateProps> = forwardRef(
  (props, ref) => {
    const templateId = localStorage.getItem('templateId')

    const activeTemplate = ALL_TEMPLATES({ data: props.data, ref }).find(
      (template) => template.id === templateId
    )

    return <S.Wrapper>{activeTemplate?.layout}</S.Wrapper>
  }
)
