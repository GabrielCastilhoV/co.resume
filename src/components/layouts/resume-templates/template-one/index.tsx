/* eslint-disable react/display-name */
import { forwardRef } from 'react'
import { useTranslation } from 'next-i18next'
import styled from 'styled-components'

import { Contact } from './contact'
import { Education } from './education'
import { Experience } from './experience'
import { Header } from './header'
import { Languages } from './languages'
import { Skills } from './skills'
import { Title } from './title'

import type { FieldValues } from 'views/home'

type FirstTemplateProps = {
  ref: React.Ref<HTMLDivElement>
  data: FieldValues
}

export const TemplateOne: React.FC<FirstTemplateProps> = forwardRef(
  (props, ref) => {
    const { t } = useTranslation('common')

    return (
      <Page ref={ref}>
        <Body>
          <Header
            name={props.data.name}
            summary={props.data.summary}
            role={props.data.profession}
          />

          <Content>
            <Experience data={props.data.experience} />
          </Content>
        </Body>

        <SideBar>
          <Contact
            data={props.data.links}
            email={props.data.email}
            phone={props.data.phone}
          />

          <Title title={t('skills')} />
          <Skills data={props.data.skills} />

          <Title title={t('languages')} />
          <Languages data={props.data.languages} />

          <Title title={t('education')} />
          <Education data={props.data.education} />
        </SideBar>
      </Page>
    )
  }
)

const Page = styled.div`
  width: 100%;
  height: 100%;

  font-family: Inter;

  display: flex;
  flex: 1;
`

const Body = styled.div`
  width: 60%;
  margin: 30px;
`

const Content = styled.div`
  margin-top: 40px;
`

const SideBar = styled.div`
  width: 40%;
  height: 100%;
  padding: 15px;
  background-color: #fcfcff;
`
