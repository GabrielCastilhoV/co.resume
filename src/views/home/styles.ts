import styled from 'styled-components'

export const Wrapper = styled.main`
  display: grid;
  height: 100vh;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const Content = styled.div``

export const Form = styled.form`
  height: calc(100vh - 114px);
  overflow-y: auto;

  padding: 0 24px 24px;
  margin-top: 24px;
  margin-right: 5px;

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
  padding-top: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.shape};
`

export const Preview = styled.div`
  width: 70%;
  height: calc(100vh - 120px);

  overflow: auto;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
`

export const Document = styled.div`
  height: 100%;
  zoom: 0.8;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;

  height: 80px;
  margin-top: 10px;
  padding: 16px;

  button {
    border: 1px solid ${({ theme }) => theme.colors.gray200};
    border-radius: 6px;
    padding: 8px 16px;

    outline: none;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.gray300};
    color: ${({ theme }) => theme.colors.white};

    display: flex;
    align-items: center;
    gap: 5px;

    svg {
      width: 20px;
      height: 20px;
    }

    &:hover {
      filter: brightness(1.2);
    }
  }
`
