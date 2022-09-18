import React, { useCallback } from 'react'
import { useTranslation } from 'next-i18next'

import {
  AiFillDelete,
  AiOutlinePlus,
  AiOutlineRight,
  AiOutlineDown
} from 'react-icons/ai'

import { RichText, TextField } from 'components/elements'

import type { GenericInput } from 'types'

import * as S from './styles'

type CollapseInputProps<T> = {
  data: T[]
  collapseHeader?: string
  inputs: GenericInput[]
  onChange: (data: T[]) => void
}

export const CollapseInput = <T extends unknown>({
  data,
  inputs,
  onChange,
  collapseHeader
}: CollapseInputProps<T>) => {
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

  const handleChangeCollapse = (index: number) => {
    onChange(
      data.map((item: any, i) =>
        i === index ? { ...item, isOpen: !item?.isOpen } : item
      )
    )
  }

  return (
    <S.Wrapper>
      <S.Collapse>
        {data?.map((item: T | any, index) => (
          <S.Panel key={index}>
            <S.CollapseHeader isOpen={item?.isOpen}>
              <S.Role onClick={() => handleChangeCollapse(index)}>
                {item?.isOpen ? <AiOutlineDown /> : <AiOutlineRight />}

                {item?.role || collapseHeader}
              </S.Role>

              <S.CollapseButton
                type="button"
                onClick={() => removeItem(index)}
                disabled={data.length === 1}
              >
                <AiFillDelete />
              </S.CollapseButton>
            </S.CollapseHeader>

            <S.CollapseContent show={item?.isOpen}>
              <S.InputContainer>
                {inputs.map((input, i) =>
                  input.type === 'input' ? (
                    <div
                      key={i}
                      style={{
                        width: i > 0 ? 'calc(50% - 8px)' : '100%',
                        display: 'flex',
                        flexWrap: 'wrap'
                      }}
                    >
                      <TextField
                        placeholder={input.placeholder}
                        initialValue={item[input.name]}
                        onInputChange={(value) =>
                          handleInput(input.name, value, index)
                        }
                      />
                    </div>
                  ) : (
                    <RichText
                      key={i}
                      initialValue={item[input.name]}
                      onRichTextChange={(value) =>
                        handleInput(input.name, value, index)
                      }
                    />
                  )
                )}
              </S.InputContainer>
            </S.CollapseContent>
          </S.Panel>
        ))}
      </S.Collapse>

      <S.AddButton type="button" onClick={addNewItem}>
        <AiOutlinePlus /> {t('add-new')}
      </S.AddButton>
    </S.Wrapper>
  )
}
