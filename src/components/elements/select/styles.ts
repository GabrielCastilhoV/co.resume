import styled from 'styled-components'

export const Wrapper = styled.select`
  width: 100%;
  height: 48px;
  padding: 0 16px;

  color: ${({ theme }) => theme.colors.grey400};

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.grey150};
  outline: none;

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.grey200};
  }
`
