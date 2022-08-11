import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
`

export const Label = styled.label`
  font-size: ${({ theme }) => theme.font.sizes.xs};
  color: ${({ theme }) => theme.colors.dark};
  cursor: pointer;
`

export const InputWrapper = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 8px;

  border-radius: 5px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.gray100};

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.gray300};
  }
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  margin-left: 8px;

  background: transparent;
  opacity: 0.8;
  border: 0;
  outline: 0;

  font-size: ${({ theme }) => theme.font.sizes.xs};
  color: ${({ theme }) => theme.colors.dark};
`
