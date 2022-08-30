import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;

  .ant-collapse {
    border-radius: 5px;
  }

  .ant-collapse-header-text {
    font-weight: ${({ theme }) => theme.font.weights.bold};
    font-size: ${({ theme }) => theme.font.sizes.xs};
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  margin: 16px 0;
`

export const CollapseButton = styled.button`
  padding: 4px;
  background: transparent;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;

  &:hover {
    background: ${({ theme }) => theme.colors.grey100};
    cursor: pointer;
  }

  &:disabled {
    background: transparent;
    cursor: not-allowed;

    svg {
      color: ${({ theme }) => theme.colors.grey100};
    }
  }
`

export const AddButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  margin-top: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-size: ${({ theme }) => theme.font.sizes.xs};
`
