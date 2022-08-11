import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 8px;

  .ant-select-selector {
    height: 46px !important;
    align-items: center;
    border-radius: 5px !important;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.05);
  }
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
    background: ${({ theme }) => theme.colors.gray100};
    cursor: pointer;
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
