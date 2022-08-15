import styled from 'styled-components'

type TitleProps = {
  title: string
}

export const Title = ({ title }: TitleProps) => (
  <Container>
    <p>{title}</p>
  </Container>
)

const Container = styled.div`
  display: flex;
  flex-direction: row;

  font-weight: bold;
  font-size: 16px;
  color: #376ffe;

  border-bottom: 1px solid #d3e4fb;
  padding-bottom: 5px;
  margin-bottom: 15px;
`
