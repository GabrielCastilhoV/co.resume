import { useEffect, useState } from 'react'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'

import {
  Fieldset,
  RichText,
  TextField,
  CollapseInput,
  CompoundInput,
  PDF
} from 'components/elements'

import {
  PERSONAL_INFORMATION_INPUTS,
  EDUCATION_INPUTS,
  WORK_INPUTS,
  LINKS_INPUTS,
  SKILLS_INPUTS,
  LANGUAGES_INPUTS
} from 'utils/constants'

import type {
  EducationData,
  ExperienceData,
  LanguagesData,
  LinksData,
  SkillData
} from 'types'

import * as S from './styles'

type FieldValues = {
  name: string
  phone: string
  email: string
  profession: string
  summary: string
  experience: ExperienceData[]
  education: EducationData[]
  links: LinksData[]
  skills: SkillData[]
  languages: LanguagesData[]
}

export const HomeView = () => {
  const [values, setValues] = useState<FieldValues>({
    name: '',
    phone: '',
    email: '',
    profession: '',
    summary: '',
    experience: [
      {
        employer: '',
        role: '',
        duration: '',
        description: ''
      }
    ],
    education: [
      {
        institution: '',
        program: '',
        duration: '',
        description: ''
      }
    ],
    links: [
      {
        service: '',
        url: ''
      }
    ],
    skills: [
      {
        skill: ''
      }
    ],
    languages: [
      {
        language: ''
      }
    ]
  })

  const handleInput = (field: keyof FieldValues, value: unknown) => {
    setValues((state) => ({ ...state, [field]: value }))
  }

  console.log(values)

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <S.Wrapper>
      <S.Form>
        <Fieldset legend="Personal Information">
          <S.InputContainer>
            {PERSONAL_INFORMATION_INPUTS?.map((input, index) => (
              <S.InputContainer
                key={index}
                style={{ width: index < 2 ? 'calc(50% - 8px)' : '100%' }}
              >
                <TextField
                  {...input}
                  onInputChange={(value) =>
                    handleInput(input.name as keyof FieldValues, value)
                  }
                />
              </S.InputContainer>
            ))}
          </S.InputContainer>
        </Fieldset>

        <Fieldset legend="Professional Summary">
          <RichText
            onRichTextChange={(value) => handleInput('summary', value)}
          />
        </Fieldset>

        <Fieldset legend="Work History">
          <CollapseInput
            name="role"
            data={values?.experience}
            inputs={WORK_INPUTS}
            onChange={(value) => handleInput('experience', value)}
          />
        </Fieldset>

        <Fieldset legend="Education">
          <CollapseInput
            name="education"
            data={values?.education}
            inputs={EDUCATION_INPUTS}
            onChange={(value) => handleInput('education', value)}
          />
        </Fieldset>

        <Fieldset legend="Skills">
          <CompoundInput
            data={values?.skills}
            onChange={(value) => handleInput('skills', value)}
            inputs={SKILLS_INPUTS}
          />
        </Fieldset>

        <Fieldset legend="Social Links & Websites">
          <CompoundInput
            data={values?.links}
            onChange={(value) => handleInput('links', value)}
            inputs={LINKS_INPUTS}
            hasOptions
          />
        </Fieldset>

        <Fieldset legend="Languages">
          <CompoundInput
            data={values?.languages}
            onChange={(value) => handleInput('languages', value)}
            inputs={LANGUAGES_INPUTS}
          />
        </Fieldset>
      </S.Form>

      {isClient && (
        <S.PDFContainer>
          <PDFViewer width="100%" height="100%" showToolbar={false}>
            <PDF />
          </PDFViewer>

          <PDFDownloadLink document={<PDF />} fileName={'Teste'}>
            Download
          </PDFDownloadLink>
        </S.PDFContainer>
      )}
    </S.Wrapper>
  )
}
