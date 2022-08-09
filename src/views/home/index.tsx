import { useState } from 'react'

import { Fieldset, RichText, TextField } from 'components/elements'

import * as S from './styles'

type FieldValues = {
  name: string
  phone: string
  email: string
  profession: string
  summary: string
}

type Field = keyof FieldValues

export const HomeView = () => {
  const [values, setValues] = useState<FieldValues>()

  const handleInput = (field: Field, value: string) => {
    setValues((state) => ({ ...state, [field]: value }))
  }

  console.log(values)

  return (
    <S.Wrapper>
      <S.Form>
        <Fieldset legend="Personal Information">
          <S.InputContainer>
            <TextField
              label="Name"
              name="name"
              placeholder="Your name"
              onInputChange={(value) => handleInput('name', value)}
            />

            <TextField
              label="Phone"
              name="phone"
              placeholder="Your phone"
              onInputChange={(value) => handleInput('phone', value)}
            />
          </S.InputContainer>

          <TextField
            label="Email"
            name="email"
            type="email"
            placeholder="Your email"
            onInputChange={(value) => handleInput('email', value)}
          />

          <TextField
            label="Profession"
            name="profession"
            placeholder="Your profession"
            onInputChange={(value) => handleInput('profession', value)}
          />
        </Fieldset>

        <Fieldset legend="Professional Summary">
          <RichText
            onRichTextChange={(value) => handleInput('summary', value)}
          />
        </Fieldset>

        <Fieldset legend="Work History">.</Fieldset>
        <Fieldset legend="Education">.</Fieldset>
        <Fieldset legend="Skills">.</Fieldset>
        <Fieldset legend="Social Links & Websites">.</Fieldset>
        <Fieldset legend="Languages">.</Fieldset>
        <Fieldset legend="Options">.</Fieldset>
      </S.Form>
    </S.Wrapper>
  )
}
