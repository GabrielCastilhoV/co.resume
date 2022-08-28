import styled from 'styled-components'

type HeaderProps = {
  name: string
  role: string
}

export const Header = ({ name, role }: HeaderProps) => (
  <Container>
    <Title>{name}</Title>
    <Role>{role}</Role>
  </Container>
)

const Container = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #ccc;
`

const Title = styled.p`
  font-weight: bold;
  font-size: 36px;
  color: #282828;
`

export const Role = styled.p`
  font-size: 22px;
  margin-top: 10px;
  color: #757575;
`
