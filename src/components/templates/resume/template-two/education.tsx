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
          {!!education.program && <Program>{education.program}</Program>}

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

const Program = styled.p`
  font-weight: 600;
`

const Text = styled.p`
  font-size: 13px;
  color: #3a3a3a;
`
