import styled from 'styled-components'

type HeaderProps = {
  name: string
  role: string
  summary: string
}

export const Header = ({ name, role, summary }: HeaderProps) => (
  <>
    <Title>{name}</Title>
    <Role>{role}</Role>

    <Summary dangerouslySetInnerHTML={{ __html: summary }} />
  </>
)

const Title = styled.p`
  font-weight: bold;
  font-size: 26px;
  color: #282828;
`

export const Role = styled.p`
  font-size: 22px;
  margin-top: 10px;
  color: #757575;
`

const Summary = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: #3a3a3a;
  margin-top: 10px;
`
