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
  margin-bottom: 20px;
`

export const TemplatePreview = styled.div`
  height: 1200px;
  border: 1px solid ${({ theme }) => theme.colors.gray150};

  cursor: pointer;
  user-select: none;
  zoom: 0.3;

  transition: scale 0.3s ease-in-out;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.dark};

    scale: 1.05;
  }
`
