export type LanguagesProps = {
  name: string
  code: string
  image: string
}

export const languages: LanguagesProps[] = [
  {
    name: 'en-US',
    code: 'en',
    image: '/icons/flags/eua.svg'
  },

  {
    name: 'pt-BR',
    code: 'pt',
    image: '/icons/flags/br.svg'
  }
]
