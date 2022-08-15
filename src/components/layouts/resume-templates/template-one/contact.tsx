/* eslint-disable jsx-a11y/alt-text */
import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: 10px;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`

const Text = styled.p`
  color: #3a3a3a;
  text-decoration: none;
  margin-left: 8px;
`

type ContactProps = {
  name: string
  summary: string
}

export const Contact = () => (
  <Container>
    <Item>
      <img
        src="./images/icon-link.png"
        style={{ width: '24px', height: '24px' }}
      />

      <a href="https://gabrielcastilho.com">
        <Text>gabrielcastilho.com</Text>
      </a>
    </Item>

    <Item>
      <img src="./images/email.png" style={{ width: '24px', height: '24px' }} />

      <a href="gabrielcastilho.com">
        <Text>abc@gmail.com</Text>
      </a>
    </Item>

    <Item>
      <img src="./images/phone.png" style={{ width: '24px', height: '24px' }} />

      <a href="gabrielcastilho.com">
        <Text>69 9 9294-3081</Text>
      </a>
    </Item>

    <Item>
      <img
        src="./images/github.png"
        style={{ width: '24px', height: '24px' }}
      />

      <a href="gabrielcastilho.com">
        <Text>GabrielCastilhoV</Text>
      </a>
    </Item>

    <Item>
      <img
        src="./images/linkedin.png"
        style={{ width: '24px', height: '24px' }}
      />

      <a href="gabrielcastilho.com">
        <Text>GabrielCastilhoV</Text>
      </a>
    </Item>
  </Container>
)
