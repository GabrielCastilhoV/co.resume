import React, { useCallback } from 'react'
import { Collapse } from 'antd'

import { AiFillDelete, AiOutlinePlus } from 'react-icons/ai'

import { RichText, TextField } from 'components/elements'

import type { GenericInput } from 'types'

const { Panel } = Collapse

import * as S from './styles'

type CollapseInputProps = {
  name: 'role' | 'education'
  data: any[]
  inputs: GenericInput[]
  onChange: (data: any[]) => void
}

export const CollapseInput = ({
  name,
  data,
  inputs,
  onChange
}: CollapseInputProps) => {
  const handleInput = useCallback(
    (field: string, value: string, index: number) => {
      const newData = [...data]
      newData[index][field] = value

      onChange(newData)
    },
    [data]
  )

  const addNewItem = useCallback(() => {
    onChange([
      ...data,
      { employer: '', role: '', duration: '', description: '' }
    ])
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
        {data?.map((item, index) => (
          <Panel
            header={item.role || `Your ${name}`}
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
                    style={{
                      width: i > 0 ? 'calc(50% - 8px)' : '100%',
                      display: 'flex',
                      flexWrap: 'wrap'
                    }}
                  >
                    <TextField
                      key={i}
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
        <AiOutlinePlus /> Add new
      </S.AddButton>
    </S.Wrapper>
  )
}
