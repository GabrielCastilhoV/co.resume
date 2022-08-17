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
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onSelectChange && onSelectChange(newValue)
  }

  return (
    <S.Wrapper onChange={onChange} value={value}>
      <option value="" hidden>
        {t('select-option')}
      </option>

      {options?.options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </S.Wrapper>
  )
}
