import { Text, View, StyleSheet } from '@react-pdf/renderer'
import { Title } from './title'

const styles = StyleSheet.create({
  experience: {
    marginTop: 15
  },
  role: {
    color: '#323232',
    fontWeight: 'bold',
    marginBottom: 2
  },
  employer: {
    color: '#323232',
    marginBottom: 5
  },
  description: {
    color: '#706f6f'
  }
})

type ExperienceProps = {
  role: string
  employer: string
  description: string
}

export const Experience = () => (
  <View>
    <Title title="EXPERIENCE" />

    <View style={[styles.experience, { marginTop: 0 }]}>
      <Text style={styles.role}>Full Stack Developer</Text>
      <Text style={styles.employer}>IBM | Mar, 2020 - Jun, 2022</Text>

      <Text style={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer too
      </Text>
    </View>

    <View style={styles.experience}>
      <Text style={styles.role}>Full Stack Developer</Text>
      <Text style={styles.employer}>IBM | Mar, 2020 - Jun, 2022</Text>

      <Text style={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer too
      </Text>
    </View>

    <View style={styles.experience}>
      <Text style={styles.role}>Full Stack Developer</Text>
      <Text style={styles.employer}>IBM | Mar, 2020 - Jun, 2022</Text>

      <Text style={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer too
      </Text>
    </View>

    <View style={styles.experience}>
      <Text style={styles.role}>Full Stack Developer</Text>
      <Text style={styles.employer}>IBM | Mar, 2020 - Jun, 2022</Text>

      <Text style={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer too
      </Text>
    </View>

    <View style={styles.experience}>
      <Text style={styles.role}>Full Stack Developer</Text>
      <Text style={styles.employer}>IBM | Mar, 2020 - Jun, 2022</Text>

      <Text style={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer too
      </Text>
    </View>

    <View style={styles.experience} break>
      <Text style={styles.role}>Full Stack Developer</Text>
      <Text style={styles.employer}>IBM | Mar, 2020 - Jun, 2022</Text>

      <Text style={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer too
      </Text>
    </View>
  </View>
)
