import styled from 'styled-components'

export const Wrapper = styled.main`
  height: calc(100vh - 90px);
  margin-top: 16px;
  padding: 0 24px;

  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 0.8fr;
  }
`

export const Form = styled.form`
  overflow-y: auto;
  padding-right: 16px;
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`
