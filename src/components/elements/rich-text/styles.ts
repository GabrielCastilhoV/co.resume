import { EditorContent } from '@tiptap/react'

import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;

  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.grey150};

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.grey200};
  }
`

export const Toolbar = styled.div`
  padding: 8px;
  background: ${({ theme }) => theme.colors.grey50};

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey150};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  display: flex;
  align-items: center;
  gap: 8px;
`

export const Button = styled.button<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  padding: 8px;

  background: transparent;
  border-radius: 5px;
  outline: 0;
  border: 0;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.grey150};
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background: ${({ theme }) => theme.colors.grey150};
    `}
`

export const Editor = styled(EditorContent)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;

  .ProseMirror {
    min-height: 100px;
    padding: 8px;
    outline: none;
  }
`
