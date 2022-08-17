import React, { useCallback } from 'react'
import { useTranslation } from 'next-i18next'
import { Collapse } from 'antd'
import { AiFillDelete, AiOutlinePlus } from 'react-icons/ai'

import { RichText, TextField } from 'components/elements'
const { Panel } = Collapse

import type { GenericInput } from 'types'

import * as S from './styles'

type CollapseInputProps<T> = {
  name: 'role' | 'education'
  data: T[]
  collapseHeader?: string
  inputs: GenericInput[]
  onChange: (data: T[]) => void
}

export const CollapseInput = <T extends unknown>({
  name,
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

  return (
    <S.Wrapper>
      <Collapse accordion>
        {data?.map((item: T | any, index) => (
          <Panel
            header={item?.role || collapseHeader}
            key={index}
            extra={
              <S.CollapseButton
                type="button"
                onClick={() => removeItem(index)}
                disabled={data.length === 1}
              >
                <AiFillDelete />
              </S.CollapseButton>
            }
          >
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
          </Panel>
        ))}
      </Collapse>

      <S.AddButton type="button" onClick={addNewItem}>
        <AiOutlinePlus /> {t('add-new')}
      </S.AddButton>
    </S.Wrapper>
  )
}
