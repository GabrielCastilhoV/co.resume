import React, { useState, useCallback, useEffect } from 'react'
import { Collapse } from 'antd'

import { AiFillDelete, AiOutlinePlus } from 'react-icons/ai'

import { RichText, TextField } from 'components/elements'

import type { Experience } from 'views'

const { Panel } = Collapse

import * as S from './styles'

type TimeLineWorkProps = {
  data: Experience[]
  onChange: (data: Experience[]) => void
}

export const TimeLineWork = ({ data, onChange }: TimeLineWorkProps) => {
  const handleInput = useCallback(
    (field: keyof Experience, value: string, index: number) => {
      const newData = [...data]
      newData[index][field] = value

      onChange(newData)
    },
    [data]
  )

  const addNewWork = useCallback(() => {
    onChange([
      ...data,
      { employer: '', role: '', duration: '', description: '' }
    ])
  }, [data])

  const removeWork = useCallback(
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
            header={item.role || 'Your role'}
            key={index}
            extra={
              <S.CollapseButton
                type="button"
                onClick={() => removeWork(index)}
                disabled={data.length === 1}
              >
                <AiFillDelete />
              </S.CollapseButton>
            }
          >
            <TextField
              placeholder="Position or role"
              initialValue={item.role}
              onInputChange={(value) => handleInput('role', value, index)}
            />

            <S.InputContainer>
              <TextField
                placeholder="Employer"
                initialValue={item.employer}
                onInputChange={(value) => handleInput('employer', value, index)}
              />
              <TextField
                placeholder="From - Until"
                initialValue={item.duration}
                onInputChange={(value) => handleInput('duration', value, index)}
              />
            </S.InputContainer>

            <RichText
              onRichTextChange={(value) =>
                handleInput('duration', value, index)
              }
            />
          </Panel>
        ))}
      </Collapse>

      <S.AddButton type="button" onClick={addNewWork}>
        <AiOutlinePlus /> Add work history
      </S.AddButton>
    </S.Wrapper>
  )
}
