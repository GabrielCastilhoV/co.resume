import styled from 'styled-components'

import type { LinksData } from 'types'

type ContactProps = {
  data: LinksData[]
  email: string
  phone: string
}

export const Contact = ({ data, email, phone }: ContactProps) => {
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
          <ServiceName>EMAIL</ServiceName>

          <a href={'mailto:' + email}>
            <Text>{email}</Text>
          </a>
        </Item>
      )}

      {!!phone && (
        <Item>
          <ServiceName>PHONE</ServiceName>

          <a href={'tel:' + phone}>
            <Text>{phone}</Text>
          </a>
        </Item>
      )}

      {data?.length > 0 &&
        data?.map((link, index) => (
          <Item key={index}>
            <ServiceName>{link.service}</ServiceName>

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

const Container = styled.div``

const Item = styled.div`
  margin-bottom: 15px;
`

const ServiceName = styled.p`
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 5px;
`

const Text = styled.p`
  color: #3a3a3a;
  text-decoration: none;
`
