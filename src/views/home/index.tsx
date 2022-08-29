import { useEffect, useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print'
import { useTranslation } from 'next-i18next'

import { AiOutlineFileText, AiOutlineDownload } from 'react-icons/ai'

import { useResume, FieldValues } from 'hooks'

import {
  Fieldset,
  RichText,
  TextField,
  CollapseInput,
  CompoundInput,
  Dialog,
  TemplateList,
  ActiveTemplate,
  Header
} from 'components/elements'

import {
  PERSONAL_INFORMATION_INPUTS,
  EDUCATION_INPUTS,
  WORK_INPUTS,
  LINKS_INPUTS,
  SKILLS_INPUTS,
  LANGUAGES_INPUTS,
  LANGUAGES_SELECT,
  LINKS_SELECT,
  DEFAULT_DATA
} from 'utils/constants'

import * as S from './styles'

export const HomeView = () => {
  const pdfRef = useRef(null)
  const { t } = useTranslation('common')
  const { data, isModified, handleInput } = useResume()

  const [isClient, setIsClient] = useState<boolean>(false)
  const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handlePrint = useReactToPrint({
    content: () => pdfRef?.current
  })

  return (
    <>
      <S.Wrapper>
        <S.Content>
          <Header />

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
                      initialValue={data[input.name]}
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
                initialValue={data.summary !== '' ? data.summary : ''}
                onRichTextChange={(value) => handleInput('summary', value)}
              />
            </Fieldset>

            <Fieldset legend={t('work-history')}>
              <CollapseInput
                collapseHeader={t('your-role')}
                data={data?.experience}
                inputs={WORK_INPUTS()}
                onChange={(value) => handleInput('experience', value)}
              />
            </Fieldset>

            <Fieldset legend={t('education')}>
              <CollapseInput
                collapseHeader={t('your-education')}
                data={data?.education}
                inputs={EDUCATION_INPUTS()}
                onChange={(value) => handleInput('education', value)}
              />
            </Fieldset>

            <Fieldset legend={t('skills')}>
              <CompoundInput
                data={data?.skills}
                onChange={(value) => handleInput('skills', value)}
                inputs={SKILLS_INPUTS()}
              />
            </Fieldset>

            <Fieldset legend={t('social-links')}>
              <CompoundInput
                data={data?.links}
                onChange={(value) => handleInput('links', value)}
                inputs={LINKS_INPUTS()}
                options={LINKS_SELECT}
              />
            </Fieldset>

            <Fieldset legend={t('languages')}>
              <CompoundInput
                data={data?.languages}
                onChange={(value) => handleInput('languages', value)}
                inputs={LANGUAGES_INPUTS()}
                options={LANGUAGES_SELECT()}
                inverted
              />
            </Fieldset>
          </S.Form>
        </S.Content>

        {isClient && (
          <S.PDFContainer>
            <S.Preview>
              <S.Document>
                <ActiveTemplate
                  data={isModified ? data : DEFAULT_DATA}
                  ref={pdfRef}
                />
              </S.Document>
            </S.Preview>

            <S.Footer>
              <button onClick={() => setDialogIsOpen(!dialogIsOpen)}>
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

      <Dialog
        isOpen={dialogIsOpen}
        handleChangeStatus={() => setDialogIsOpen(!dialogIsOpen)}
        title={t('select-template')}
      >
        <TemplateList
          data={isModified ? data : DEFAULT_DATA}
          onCloseModal={() => setDialogIsOpen(!dialogIsOpen)}
        />
      </Dialog>
    </>
  )
}
