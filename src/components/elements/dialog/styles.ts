import styled from 'styled-components'

export const Wrapper = styled.dialog`
  width: 100%;
  height: 100%;
  padding: 20px;

  background: rgba(0, 0, 0, 0.5);
  border: none;

  position: fixed;
  z-index: 10;
  inset: 0;
  top: 50%;
  transform: translateY(-50%);
`

export const DialogContainer = styled.div`
  height: 100%;
  position: relative;
  padding: 20px;
  overflow: auto;

  background: ${({ theme }) => theme.colors.grey100};
  border-radius: 6px;

  > svg {
    position: absolute;
    right: 20px;
    top: 25px;

    font-size: 20px;
    cursor: pointer;
  }
`

export const Content = styled.div`
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
`

export const Title = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.font.sizes.md};

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.font.sizes.lg};
  }
`
