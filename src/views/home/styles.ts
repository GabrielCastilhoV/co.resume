import styled from 'styled-components'

export const Wrapper = styled.main`
  height: calc(100vh - 90px);
  margin-top: 16px;
  padding: 0 24px 16px;

  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const Form = styled.form`
  overflow-y: auto;
  padding-right: 16px;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray100};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray200};
    border-radius: 10px;
  }
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const PDFContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px 0 16px 16px;
`
