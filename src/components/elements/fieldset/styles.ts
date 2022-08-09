import styled, { css } from 'styled-components'

export const Wrapper = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
`

export const Legend = styled.legend`
  ${({ theme }) => css`
    width: 100%;
    padding-bottom: 4px;
    margin-bottom: 24px;
    border-bottom: 1px solid ${theme.colors.gray150};

    color: ${theme.colors.gray400};
    font-weight: ${theme.font.weights.medium};
    font-size: ${theme.font.sizes.sm};
  `}
`
