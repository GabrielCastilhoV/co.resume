import styled, { css } from 'styled-components'

type LanguagesProps = {
  name: string
  summary: string
}

export const Languages = () => {
  const english = 3
  const portuguese = 5

  return (
    <Container>
      <Item>
        <p>English</p>

        <WrapperCircle>
          {Array.from({ length: 5 }, (_, index) => index + 1).map((item) => (
            <Circle key={item} active={item <= english} />
          ))}
        </WrapperCircle>
      </Item>

      <Item>
        <p>Portuguese</p>

        <WrapperCircle>
          {Array.from({ length: 5 }, (_, index) => index + 1).map((item) => (
            <Circle key={item} active={item <= portuguese} />
          ))}
        </WrapperCircle>
      </Item>
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 15px;
`

const Item = styled.div`
  margin-bottom: 10px;
`

const WrapperCircle = styled.div`
  margin-top: 5px;

  display: flex;
  flex-direction: row;
`

const Circle = styled.div<{ active: boolean }>`
  width: 16px;
  height: 16px;
  background-color: gray;
  border-radius: 999px;
  margin-right: 5px;

  ${({ active }) =>
    active &&
    css`
      background-color: #376ffe;
    `}
`
