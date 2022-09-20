import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
`

export const Collapse = styled.div`
  width: 100%;
  background: #fff;
  border: 1px solid #dadada;
  border-radius: 5px;
`

export const Panel = styled.div`
  background: #fff;
  border-radius: 5px;
`

export const CollapseHeader = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  cursor: pointer;

  background: #fafafa;
  border-bottom: 1px solid #dadada;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  ${({ isOpen }) =>
    !isOpen &&
    css`
      border-radius: 5px;
    `}
`

export const Role = styled.div`
  width: 90%;
  padding: 12px 16px;

  font-weight: ${({ theme }) => theme.font.weights.bold};

  display: flex;
  align-items: center;
  gap: 8px;
`

export const CollapseContent = styled.div<{ show: boolean }>`
  padding: 12px 16px;
  display: block;

  ${({ show }) => !show && 'display: none;'}
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

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
  z-index: 10;

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
