import { Text, View, StyleSheet } from '@react-pdf/renderer'
import { List } from './list'

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  skill: {
    color: '#3A3A3A',
    marginBottom: 5
  }
})

type SkillsProps = {
  skills: string[]
  summary: string
}

export const Skills = () => (
  <View style={styles.container}>
    <Text style={styles.skill}>React.JS</Text>
    <Text style={styles.skill}>Next.JS</Text>
    <Text style={styles.skill}>TypeScript</Text>
    <Text style={styles.skill}>GraphQL</Text>
  </View>
)
