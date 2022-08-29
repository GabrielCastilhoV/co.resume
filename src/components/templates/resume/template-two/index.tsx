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

import type { FieldValues } from 'hooks'

type FirstTemplateProps = {
  ref: React.Ref<HTMLDivElement>
  data: FieldValues
}

export const TemplateTwo: React.FC<FirstTemplateProps> = forwardRef(
  (props, ref) => {
    const { t } = useTranslation('common')

    return (
      <Page ref={ref}>
        <Header name={props.data.name} role={props.data.profession} />

        <Body>
          <SideBar>
            <Title title={t('contact')} removeMargin />
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

          <Content>
            <Title title={t('profile')} removeMargin />
            <Summary dangerouslySetInnerHTML={{ __html: props.data.summary }} />

            <Experience data={props.data.experience} />
          </Content>
        </Body>
      </Page>
    )
  }
)

const Page = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;

  padding: 40px;

  font-family: 'Montserrat';
`

const SideBar = styled.div`
  width: 40%;
  height: calc(100vh - 220px);
  border-right: 1px solid #ccc;
`

const Body = styled.div`
  display: flex;
  margin: 40px 0;
`

const Content = styled.div`
  width: 60%;
  padding-left: 40px;
`

const Summary = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #3a3a3a;
  margin-top: 10px;
`
