import styled from 'styled-components'

type TitleProps = {
  title: string
  removeMargin?: boolean
}

export const Title = ({ title, removeMargin }: TitleProps) => (
  <Container removeMargin={removeMargin}>{title}</Container>
)

const Container = styled.p<{ removeMargin: boolean }>`
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;

  color: #282828;

  margin-top: 40px;
  margin-bottom: 20px;

  ${(props) => props.removeMargin && 'margin-top: 0;'}

  &::after {
    display: block;
    content: '';
    margin-top: 5px;
    width: 10%;
    height: 2px;
    background: #282828;
  }
`
