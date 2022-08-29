import styled from 'styled-components'

import type { EducationData } from 'types'

import { List } from './list'

type EducationProps = {
  data: EducationData[]
}

export const Education = ({ data }: EducationProps) => (
  <div>
    {data?.length > 0 &&
      data?.map((education, index) => (
        <Item key={index}>
          {!!education.program && <List>{education.program}</List>}

          <Text>
            {education.institution}{' '}
            {education.duration && '(' + education.duration + ')'}
          </Text>
        </Item>
      ))}
  </div>
)

const Item = styled.div`
  margin-bottom: 10px;
`

const Text = styled.p`
  font-size: 14px;
  color: #3a3a3a;
`
