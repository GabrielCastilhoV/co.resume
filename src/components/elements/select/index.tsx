import { useState } from 'react'
import { useTranslation } from 'next-i18next'

import type { SelectGeneric } from 'types'

import * as S from './styles'

type SelectProps = {
  options: SelectGeneric
  initialValue?: string
  onSelectChange: (value: string) => void
}

export const Select = ({
  options,
  initialValue,
  onSelectChange
}: SelectProps) => {
  const { t } = useTranslation('inputs')

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.currentTarget.value

    !!onSelectChange && onSelectChange(newValue)
  }

  return (
    <S.Wrapper onChange={onChange}>
      <option value={initialValue} hidden>
        {t(initialValue) || t('select-option')}
      </option>

      {options?.options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </S.Wrapper>
  )
}
