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
  margin-left: 8px;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Document = styled.div`
  width: 100%;
  max-width: 90%;
  height: 100%;

  border-radius: 6px;
  padding: 1px;
  border: 1px solid #ccc;
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
