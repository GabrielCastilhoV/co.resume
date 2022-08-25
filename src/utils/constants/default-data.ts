import { FieldValues } from 'hooks'

export const DEFAULT_DATA: FieldValues = {
  name: 'Your name',
  profession: 'Profession',
  summary:
    'Motivated Sales Associate with 5 years of experience boosting sales and customer loyalty through individualized service. Resourceful expert at learning customer needs, directing to desirable merchandise and upselling to meet sales quotas. Committed to strengthening customer experiences with positivity and professionalism when answering requests and processing sales.',
  email: 'jhondoe@email.com',
  phone: '+1 234 567 890',
  skills: [
    {
      skill: 'Store opening and closing'
    },
    {
      skill: 'Customer service'
    }
  ],
  languages: [
    {
      language: 'English',
      level: 'advanced'
    },
    {
      language: 'Spanish',
      level: 'intermediate'
    }
  ],
  education: [
    {
      institution: 'Universidade de São Paulo',
      program: "Bachelor's Degree: Marketing",
      duration: '2010 - 2014'
    }
  ],
  experience: [
    {
      role: 'Developer',
      employer: 'IBM',
      duration: 'April 2018 - Present',
      description:
        "I implemented the game mechanics in the Unity 3D graphics engine; <br /> I programmed the artificial intelligence of the game's enemies; <br /> Import different types of files such as audio, textures and 3D objects into the game. <br /> I collaborated with designers and artists."
    }
  ],
  links: [
    {
      service: 'linkedin',
      username: 'gabrielcastilhov'
    }
  ]
}

export const DEFAULT_DATA_EMPTY: FieldValues = {
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
      username: ''
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
}
