import styled from 'styled-components'

type ListProps = {
  children: React.ReactNode
}

export const List = ({ children }: ListProps) => (
  <Container>
    <BulletPoint>•</BulletPoint>
    <ItemContent>{children}</ItemContent>
  </Container>
)

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 5px;
`

const BulletPoint = styled.p`
  width: 10px;
  font-size: 14px;
`

const ItemContent = styled.p`
  color: #3a3a3a;
  font-weight: bold;
`
