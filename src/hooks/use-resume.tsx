import { createContext, useState, useEffect, useContext } from 'react'

import type {
  EducationData,
  ExperienceData,
  LanguagesData,
  LinksData,
  SkillData
} from 'types'

import { DEFAULT_DATA_EMPTY } from 'utils/constants'

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

export type ResumeContextData = {
  data: FieldValues
  isModified: boolean
  handleInput: (field: keyof FieldValues, value: unknown) => void
}

export type ResumeProviderProps = {
  children: React.ReactNode
}

export const ResumeContextDataDefaultValues: ResumeContextData = {
  data: DEFAULT_DATA_EMPTY,
  isModified: false,
  handleInput: () => null
}

export const ResumeContext = createContext<ResumeContextData>(
  ResumeContextDataDefaultValues
)

const ResumeProvider = ({ children }: ResumeProviderProps) => {
  const [values, setValues] = useState<FieldValues>(DEFAULT_DATA_EMPTY)
  const [hadModification, setHadModification] = useState<boolean>(false)

  useEffect(() => {
    const localValues = localStorage.getItem('values')
    const localNumberModifications = localStorage.getItem('modifications')

    if (localValues) setValues(JSON.parse(localValues))
    if (localNumberModifications)
      setHadModification(JSON.parse(localNumberModifications))
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem('values', JSON.stringify(values))
      localStorage.setItem('modifications', JSON.stringify(hadModification))
    }, 3000)

    return () => clearTimeout(timer)
  }, [values])

  const handleInput = (field: keyof FieldValues, value: unknown) => {
    setValues((state) => ({
      ...state,
      [field]: value
    }))

    setHadModification(true)
  }

  return (
    <ResumeContext.Provider
      value={{
        data: values,
        handleInput,
        isModified: hadModification
      }}
    >
      {children}
    </ResumeContext.Provider>
  )
}

const useResume = () => useContext(ResumeContext)

export { ResumeProvider, useResume }
