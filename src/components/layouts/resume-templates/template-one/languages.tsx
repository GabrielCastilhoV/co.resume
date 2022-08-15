import styled, { css } from 'styled-components'

import type { LanguagesData } from 'types'

type LanguagesProps = {
  data: LanguagesData[]
}

export const Languages = ({ data }: LanguagesProps) => {
  const level = {
    beginner: 1,
    intermediate: 3,
    advanced: 5
  }

  return (
    <Container>
      {data?.length > 0 &&
        data?.map((language, index) => (
          <Item key={index}>
            <p>{language.language}</p>

            {!!language.level && (
              <WrapperCircle>
                {Array.from({ length: 5 }, (_, index) => index + 1).map(
                  (item) => (
                    <Circle key={item} active={item <= level[language.level]} />
                  )
                )}
              </WrapperCircle>
            )}
          </Item>
        ))}
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
