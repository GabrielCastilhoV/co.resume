import { useEffect, useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print'
import { useTranslation } from 'next-i18next'

import { AiOutlineFileText, AiOutlineDownload } from 'react-icons/ai'

import { TemplateOne } from 'components/layouts/resume-templates'
import {
  Fieldset,
  RichText,
  TextField,
  CollapseInput,
  CompoundInput
} from 'components/elements'

import {
  PERSONAL_INFORMATION_INPUTS,
  EDUCATION_INPUTS,
  WORK_INPUTS,
  LINKS_INPUTS,
  SKILLS_INPUTS,
  LANGUAGES_INPUTS,
  LANGUAGES_SELECT,
  LINKS_SELECT
} from 'utils/constants'

import type {
  EducationData,
  ExperienceData,
  LanguagesData,
  LinksData,
  SkillData
} from 'types'

import * as S from './styles'

export type FieldValues = {
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
  const pdfRef = useRef(null)
  const { t } = useTranslation('common')

  const [isClient, setIsClient] = useState(false)
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
        duration: ''
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

  useEffect(() => {
    const localValues = localStorage.getItem('values')

    if (localValues) {
      setValues(JSON.parse(localValues))
    }
  }, [])

  useEffect(() => {
    setIsClient(true)

    const timer = setTimeout(() => {
      localStorage.setItem('values', JSON.stringify(values))
    }, 3000)

    return () => clearTimeout(timer)
  }, [values])

  const handleInput = (field: keyof FieldValues, value: unknown) => {
    setValues((state) => ({ ...state, [field]: value }))
  }

  const handlePrint = useReactToPrint({
    content: () => pdfRef?.current
  })

  return (
    <>
      <S.Wrapper>
        <S.Form>
          <Fieldset legend={t('personal-information')}>
            <S.InputContainer>
              {PERSONAL_INFORMATION_INPUTS()?.map((input, index) => (
                <S.InputContainer
                  key={index}
                  style={{ width: index < 2 ? 'calc(50% - 8px)' : '100%' }}
                >
                  <TextField
                    {...input}
                    initialValue={values[input.name]}
                    onInputChange={(value) =>
                      handleInput(input.name as keyof FieldValues, value)
                    }
                  />
                </S.InputContainer>
              ))}
            </S.InputContainer>
          </Fieldset>

          <Fieldset legend={t('professional-summary')}>
            <RichText
              initialValue={values.summary !== '' ? values.summary : ''}
              onRichTextChange={(value) => handleInput('summary', value)}
            />
          </Fieldset>

          <Fieldset legend={t('work-history')}>
            <CollapseInput
              collapseHeader={t('your-role')}
              data={values?.experience}
              inputs={WORK_INPUTS()}
              onChange={(value) => handleInput('experience', value)}
            />
          </Fieldset>

          <Fieldset legend={t('education')}>
            <CollapseInput
              collapseHeader={t('your-education')}
              data={values?.education}
              inputs={EDUCATION_INPUTS()}
              onChange={(value) => handleInput('education', value)}
            />
          </Fieldset>

          <Fieldset legend={t('skills')}>
            <CompoundInput
              data={values?.skills}
              onChange={(value) => handleInput('skills', value)}
              inputs={SKILLS_INPUTS()}
            />
          </Fieldset>

          <Fieldset legend={t('social-links')}>
            <CompoundInput
              data={values?.links}
              onChange={(value) => handleInput('links', value)}
              inputs={LINKS_INPUTS()}
              options={LINKS_SELECT}
            />
          </Fieldset>

          <Fieldset legend={t('languages')}>
            <CompoundInput
              data={values?.languages}
              onChange={(value) => handleInput('languages', value)}
              inputs={LANGUAGES_INPUTS()}
              options={LANGUAGES_SELECT()}
              inverted
            />
          </Fieldset>
        </S.Form>

        {isClient && (
          <S.PDFContainer>
            <S.Document>
              <TemplateOne data={values} ref={pdfRef} />
            </S.Document>

            <S.Footer>
              <button onClick={() => alert('Coming soon')}>
                {t('change-template')}
                <AiOutlineFileText />
              </button>

              <button onClick={handlePrint}>
                {t('print-out')}
                <AiOutlineDownload />
              </button>
            </S.Footer>
          </S.PDFContainer>
        )}
      </S.Wrapper>
    </>
  )
}
