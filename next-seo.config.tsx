import { DefaultSeoProps } from 'next-seo'

export const defaultConfig: DefaultSeoProps = {
  title: 'CO. Resume',
  description:
    'CO. Resume é um construtor de currículo gratuito que ajuda você a criar um currículo bonito e profissional em minutos.',
  canonical: 'https://co-resume.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://co-resume.vercel.app',
    site_name: 'CO. Resume',
    title: 'CO. Resume',
    images: [
      {
        url: 'https://res.cloudinary.com/dnhzgetr2/image/upload/v1661097750/banner_sdv3oh.png',
        width: 614,
        height: 273,
        alt: 'CO. Resume'
      }
    ]
  },
  additionalMetaTags: [
    { property: 'og:url', content: 'https://co-resume.vercel.app' },
    {
      property: 'og:title',
      content: 'CO. Resume'
    },
    {
      property: 'og:site_name',
      content: 'CO. Resume'
    },
    {
      property: 'og:description',
      content:
        'CO. Resume é um construtor de currículo gratuito que ajuda você a criar um currículo bonito e profissional em minutos.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:image',
      content:
        'https://res.cloudinary.com/dnhzgetr2/image/upload/v1661097750/banner_sdv3oh.png'
    },
    {
      property: 'og:image:secure_url',
      content:
        'https://res.cloudinary.com/dnhzgetr2/image/upload/v1661097750/banner_sdv3oh.png'
    },
    {
      property: 'og:image:width',
      content: '614'
    },
    {
      property: 'og:image:height',
      content: '273'
    },
    {
      property: 'og:image:type',
      content: 'image/png'
    }
  ]
}
