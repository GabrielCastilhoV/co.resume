/* eslint-disable jsx-a11y/alt-text */
import styled from 'styled-components'

import type { LinksData } from 'types'

import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineLink,
  AiOutlineMail
} from 'react-icons/ai'

import { BsTelephone } from 'react-icons/bs'

type ContactProps = {
  data: LinksData[]
  email: string
  phone: string
}

export const Contact = ({ data, email, phone }: ContactProps) => {
  const serviceImage = {
    phone: <BsTelephone />,
    email: <AiOutlineMail />,
    website: <AiOutlineLink />,
    github: <AiOutlineGithub />,
    linkedin: <AiOutlineLinkedin />
  }

  const generateUrl = ({ service, username }: LinksData) => {
    if (service === 'linkedin') {
      return `https://www.linkedin.com/in/${username}`
    }

    if (service === 'github') {
      return `https://www.github.com/${username}`
    }

    return username
  }

  return (
    <Container>
      {!!email && (
        <Item>
          <AiOutlineMail />

          <a href={'mailto:' + email}>
            <Text>{email}</Text>
          </a>
        </Item>
      )}

      {!!phone && (
        <Item>
          <BsTelephone />

          <a href={'tel:' + phone}>
            <Text>{phone}</Text>
          </a>
        </Item>
      )}

      {data?.length > 0 &&
        data?.map((link, index) => (
          <Item key={index}>
            {serviceImage[link.service]}

            <a
              href={generateUrl({
                service: link.service,
                username: link.username
              })}
            >
              <Text>{link.username}</Text>
            </a>
          </Item>
        ))}
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 15px;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  svg {
    width: 24px;
    height: 24px;

    color: #376ffe;
  }

  a {
    text-decoration: none;
  }
`

const Text = styled.p`
  color: #3a3a3a;
  text-decoration: none;
  margin-left: 10px;
`
