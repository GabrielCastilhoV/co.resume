import styled from 'styled-components'

export const Wrapper = styled.select`
  width: 100%;
  height: 48px;
  margin: 16px 0;
  padding: 0 16px;

  color: ${({ theme }) => theme.colors.gray400};

  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  outline: none;

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.gray300};
  }
`
