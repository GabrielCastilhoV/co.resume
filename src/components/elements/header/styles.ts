import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  width: 100%;
  height: 96px;
  padding: 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.grey75};

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
`

export const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  cursor: pointer;
`

export const LogoName = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.sm};
  color: ${({ theme }) => theme.colors.white};
`

export const LanguageContainer = styled.div`
  background: ${({ theme }) => theme.colors.green};
  border-radius: 16px;

  cursor: pointer;
  position: relative;
`

export const ActiveLanguage = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 22px;
`

export const LanguageName = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.font.weights.bold};

  font-size: ${({ theme }) => theme.font.sizes.xs};
`

export const LanguageList = styled.ul<{ isOpen: boolean }>`
  display: none;
  list-style: none;

  position: absolute;
  top: 55px;
  left: 0;
  right: 0;
  z-index: 10;

  background: ${({ theme }) => theme.colors.white};

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 8px 0;

  ${({ isOpen }) =>
    isOpen &&
    css`
      display: block;

      ${LanguageName} {
        color: ${({ theme }) => theme.colors.grey400};
      }
    `}
`

export const LanguageItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.grey150};
  }
`
