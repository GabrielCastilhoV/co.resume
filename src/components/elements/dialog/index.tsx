import { useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

import * as S from './styles'

type DialogProps = {
  isOpen: boolean
  handleChangeStatus: () => void
  title?: string
  children: React.ReactNode
}

export const Dialog = ({
  isOpen = false,
  handleChangeStatus,
  title,
  children
}: DialogProps) => {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const { key } = event

      if (key === 'Escape' && isOpen) {
        handleChangeStatus()
      }
    }

    document.addEventListener('keyup', handleKeyDown)

    return () => {
      document.removeEventListener('keyup', handleKeyDown)
    }
  }, [handleChangeStatus])

  return (
    <S.Wrapper
      open={isOpen}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <S.DialogContainer>
        <AiOutlineClose role="button" onClick={handleChangeStatus} />

        {!!title && <S.Title id="dialog-title">{title}</S.Title>}

        <S.Content id="dialog-description">{children}</S.Content>
      </S.DialogContainer>
    </S.Wrapper>
  )
}
