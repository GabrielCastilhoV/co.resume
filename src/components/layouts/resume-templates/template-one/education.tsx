import styled from 'styled-components'

import { List } from './list'

type EducationProps = {
  name: string
  summary: string
}

export const Education = () => (
  <div>
    <Item>
      <List>High School</List>

      <Text>IFRO (2020 - 2023)</Text>
    </Item>

    <Item>
      <List>Information systems</List>

      <Text>Centro Universitário São Lucas (2020 - 2023)</Text>
    </Item>
  </div>
)

const Item = styled.div`
  margin-bottom: 10px;
`

const Text = styled.p`
  font-size: 11px;
  color: #3a3a3a;
`
