import React, { useState, useCallback, useEffect } from 'react'
import { Collapse } from 'antd'

import { AiFillDelete, AiOutlinePlus } from 'react-icons/ai'

import { RichText, TextField } from 'components/elements'

import type { Education } from 'views'

const { Panel } = Collapse

import * as S from './styles'

type TimeLineEducationProps = {
  data: Education[]
  onChange: (data: Education[]) => void
}

export const TimeLineEducation = ({
  data,
  onChange
}: TimeLineEducationProps) => {
  const handleInput = useCallback(
    (field: keyof Education, value: string, index: number) => {
      const newData = [...data]
      newData[index][field] = value

      onChange(newData)
    },
    [data]
  )

  const addNewEducation = useCallback(() => {
    onChange([...data, { program: '', institution: '', duration: '' }])
  }, [data])

  const removeEducation = useCallback(
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
            header={item.program || 'Your Education'}
            key={index}
            extra={
              <S.CollapseButton
                type="button"
                onClick={() => removeEducation(index)}
                disabled={data.length === 1}
              >
                <AiFillDelete />
              </S.CollapseButton>
            }
          >
            <TextField
              placeholder="Degree or program"
              initialValue={item.program}
              onInputChange={(value) => handleInput('program', value, index)}
            />

            <S.InputContainer>
              <TextField
                placeholder="School or Institution"
                initialValue={item.institution}
                onInputChange={(value) =>
                  handleInput('institution', value, index)
                }
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

      <S.AddButton type="button" onClick={addNewEducation}>
        <AiOutlinePlus /> Add education history
      </S.AddButton>
    </S.Wrapper>
  )
}
