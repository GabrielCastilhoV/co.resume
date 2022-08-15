import styled from 'styled-components'

type HeaderProps = {
  name: string
  summary: string
}

export const Header = ({ name, summary }: HeaderProps) => (
  <div>
    <Title>{name}</Title>

    <Summary dangerouslySetInnerHTML={{ __html: summary }} />
  </div>
)

const Title = styled.p`
  font-weight: bold;
  font-size: 26px;
  color: #282828;
`

const Summary = styled.div`
  font-size: 14px;
  color: #3a3a3a;
  margin-top: 10px;
`
