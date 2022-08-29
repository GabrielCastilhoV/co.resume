import { useTranslation } from 'next-i18next'
import styled from 'styled-components'

import type { ExperienceData } from 'types'

import { Title } from './title'

type ExperienceProps = {
  data: ExperienceData[]
}

export const Experience = ({ data }: ExperienceProps) => {
  const { t } = useTranslation('common')

  return (
    <div>
      <Title title={t('experience')} />

      {data?.length > 0 &&
        data?.map((experience, index) => (
          <Wrapper key={index}>
            <Role>{experience.role}</Role>
            <Employer>
              {experience.employer}{' '}
              {experience.duration && '| ' + experience.duration}
            </Employer>

            <Description
              dangerouslySetInnerHTML={{ __html: experience.description }}
            />
          </Wrapper>
        ))}
    </div>
  )
}

const Wrapper = styled.div`
  margin-top: 15px;
`

const Role = styled.p`
  color: #323232;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
`

const Employer = styled.p`
  color: #323232;
  margin-bottom: 5px;
`

const Description = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: #3a3a3a;
`
