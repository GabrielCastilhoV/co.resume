import styled from 'styled-components'
import type { SkillData } from 'types'

type SkillsProps = {
  data: SkillData[]
}

export const Skills = ({ data }: SkillsProps) => (
  <Container>
    {data?.length > 0 &&
      data?.map((skill, index) => <Skill key={index}>{skill.skill}</Skill>)}
  </Container>
)

const Container = styled.div`
  margin-bottom: 15px;
`

const Skill = styled.p`
  color: #3a3a3a;
  margin-bottom: 5px;
`
