import styled from 'styled-components'

export const Wrapper = styled.header`
  width: 100%;
  height: 68px;
  padding: 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.gray300};
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
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;

  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;

  cursor: pointer;
`

export const LanguageName = styled.p`
  color: ${({ theme }) => theme.colors.gray400};
  font-size: ${({ theme }) => theme.font.sizes.xs};
`
