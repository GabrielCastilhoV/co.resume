import React, { Fragment, useCallback } from 'react'
import { useTranslation } from 'next-i18next'
import { AiFillDelete, AiOutlinePlus } from 'react-icons/ai'

import { TextField, Select } from 'components/elements'

import { GenericInput, SelectGeneric } from 'types'

import * as S from './styles'

type CompoundInputProps<T> = {
  data: T[]
  inputs: GenericInput[]
  options?: SelectGeneric
  onChange: (data: T[]) => void
  inverted?: boolean
}

export const CompoundInput = <T extends unknown>({
  data,
  onChange,
  inputs,
  options,
  inverted
}: CompoundInputProps<T>) => {
  const { t } = useTranslation('common')

  const handleInput = useCallback(
    (field: string, value: string, index: number) => {
      const newData = [...data]
      newData[index][field] = value

      onChange(newData)
    },
    [data]
  )

  const addNewItem = useCallback(() => {
    onChange([...data, {} as T])
  }, [data])

  const removeItem = useCallback(
    (index: number) => {
      onChange(data.filter((_, i) => i !== index))
    },
    [data]
  )

  return (
    <S.Wrapper>
      {data?.map((item, index) => (
        <S.Item key={index} inverted={inverted}>
          {!!options && (
            <Select
              options={options}
              initialValue={data[index][options.name]}
              onSelectChange={(value) =>
                handleInput(options?.name, value, index)
              }
            />
          )}

          {inputs?.map((input, i) => (
            <Fragment key={i}>
              <TextField
                placeholder={input.placeholder}
                initialValue={item[input.name]}
                onInputChange={(value) => handleInput(input.name, value, index)}
                style={{ gridArea: 'input' }}
              />

              <S.CollapseButton type="button" onClick={() => removeItem(index)}>
                <AiFillDelete />
              </S.CollapseButton>
            </Fragment>
          ))}
        </S.Item>
      ))}

      <S.AddButton type="button" onClick={addNewItem}>
        <AiOutlinePlus /> {t('add-new')}
      </S.AddButton>
    </S.Wrapper>
  )
}
