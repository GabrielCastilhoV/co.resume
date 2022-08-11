import React, { Fragment, useCallback } from 'react'
import { Select } from 'antd'
import { AiFillDelete, AiOutlinePlus } from 'react-icons/ai'

import { TextField } from 'components/elements'

import { GenericInput } from 'types'

import * as S from './styles'

const { Option } = Select

type CompoundInputProps = {
  data: any[]
  inputs: GenericInput[]
  onChange: (data: any[]) => void
  hasOptions?: boolean
}

export const CompoundInput = ({
  data,
  onChange,
  inputs,
  hasOptions = false
}: CompoundInputProps) => {
  const handleInput = useCallback(
    (field: string, value: string, index: number) => {
      const newData = [...data]
      newData[index][field] = value

      onChange(newData)
    },
    [data]
  )

  const addNewItem = useCallback(() => {
    onChange([...data, {}])
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
        <S.Item key={index}>
          {hasOptions && (
            <Select
              defaultValue="Select an option"
              style={{ width: 300 }}
              onChange={(value) => handleInput('service', value, index)}
            >
              <Option value="linkedin">LinkedIn</Option>
              <Option value="github">Github</Option>
              <Option value="twitter" disabled>
                Twitter
              </Option>
              <Option value="website">Website</Option>
            </Select>
          )}

          {inputs?.map((input, i) => (
            <Fragment key={i}>
              <TextField
                placeholder={input.placeholder}
                onInputChange={(value) => handleInput(input.name, value, index)}
              />

              <S.CollapseButton type="button" onClick={() => removeItem(index)}>
                <AiFillDelete />
              </S.CollapseButton>
            </Fragment>
          ))}
        </S.Item>
      ))}

      <S.AddButton type="button" onClick={addNewItem}>
        <AiOutlinePlus /> Add new
      </S.AddButton>
    </S.Wrapper>
  )
}
