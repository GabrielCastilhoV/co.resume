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
              <WrapperSquare>
                {Array.from({ length: 5 }, (_, index) => index + 1).map(
                  (item) => (
                    <Square key={item} active={item <= level[language.level]} />
                  )
                )}
              </WrapperSquare>
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
  margin-bottom: 15px;
`

const WrapperSquare = styled.div`
  display: flex;
  width: 200px;
  margin-top: 5px;
`

const Square = styled.div<{ active: boolean }>`
  width: 40px;
  height: 10px;
  background-color: #ccc;

  ${({ active }) =>
    active &&
    css`
      background-color: #282828;
    `}
`
