import React from 'react'
import { Document, Page, StyleSheet, View, Font } from '@react-pdf/renderer'

import { Header } from './header'
import { Experience } from './experience'
import { Title } from './title'
import { Skills } from './skills'
import { Contact } from './contact'
import { Education } from './education'
import { Languages } from './languages'

const styles = StyleSheet.create({
  pageWraper: {
    backgroundColor: '#fff',
    fontSize: 12
  },
  page: {
    fontFamily: 'Inter',
    flex: 1,
    flexDirection: 'row'
  },
  body: {
    width: '60%',
    margin: 30
  },
  content: {
    marginTop: 40
  },
  sideBar: {
    width: '40%',
    padding: 15,
    backgroundColor: '#FCFCFF'
  }
})

Font.register({
  family: 'Inter',
  fonts: [
    {
      src: 'http://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf',
      fontWeight: 'normal'
    },
    {
      src: 'http://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZhrib2Bg-4.ttf',
      fontWeight: 'bold'
    }
  ]
})

export const FirstTemplate = () => {
  return (
    <Document>
      <Page size="A4" style={styles.pageWraper} wrap>
        <View style={styles.page}>
          <View style={styles.body}>
            <Header />

            <View style={styles.content}>
              <Experience />
            </View>
          </View>

          <View style={styles.sideBar} fixed>
            <Contact />

            <Title title="SKILLS" />
            <Skills />

            <Title title="LANGUAGES" />
            <Languages />

            <Title title="EDUCATION" />
            <Education />
          </View>
        </View>
      </Page>
    </Document>
  )
}
