import styled from 'styled-components'

type SkillsProps = {
  skills: string[]
  summary: string
}

export const Skills = () => (
  <Container>
    <Skill>React.JS</Skill>
    <Skill>Next.JS</Skill>
    <Skill>TypeScript</Skill>
    <Skill>GraphQL</Skill>
  </Container>
)

const Container = styled.div`
  margin-bottom: 10px;
`

const Skill = styled.p`
  color: #3a3a3a;
  margin-bottom: 5px;
`
