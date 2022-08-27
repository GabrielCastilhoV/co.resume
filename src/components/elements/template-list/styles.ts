import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`

export const Template = styled.div`
  width: 300px;
`

export const TemplateName = styled.h3`
  text-align: center;
  margin-bottom: 10px;
`

export const TemplatePreview = styled.div`
  height: 800px;
  border: 1px solid ${({ theme }) => theme.colors.gray150};

  cursor: pointer;
  user-select: none;
  zoom: 0.5;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.dark};
  }
`
