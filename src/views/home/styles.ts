import styled from 'styled-components'

export const Wrapper = styled.main`
  display: grid;
  height: 100vh;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const Content = styled.div`
  background: ${({ theme }) => theme.colors.grey50};
  position: relative;
  z-index: 2;

  box-shadow: 45px 0px 45px rgba(33, 37, 51, 0.08),
    11px 0px 25px rgba(33, 37, 51, 0.06), 0px 0px 0px rgba(33, 37, 51, 0.06);
`

export const Form = styled.form`
  height: calc(100vh - 136px);
  overflow-y: auto;

  padding: 0 24px 24px;
  margin: 24px 5px 16px 0;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #cfd2d7;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #747886;
    border-radius: 10px;
  }
`

export const InputContainer = styled.div<{ customWidth?: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;

  @media screen and (min-width: 768px) {
    width: ${(props) => props.customWidth || '100%'};
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

  background-color: ${({ theme }) => theme.colors.grey100};
`

export const Preview = styled.div`
  width: 90%;
  height: calc(100vh - 120px);

  overflow: auto;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;

  @media screen and (min-width: 768px) {
    width: 70%;
  }
`

export const Document = styled.div`
  height: 100%;
  zoom: 0.6;

  @media screen and (min-width: 768px) {
    zoom: 0.8;
  }
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
    border: 0;
    border-radius: 16px;
    padding: 14px 22px;

    outline: none;
    cursor: pointer;
    transition: filter 0.2s ease-in-out;
    background: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
    font-weight: ${({ theme }) => theme.font.weights.bold};

    display: flex;
    align-items: center;
    gap: 10px;

    svg {
      width: 24px;
      height: 24px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`
