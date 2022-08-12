import { Text, View, StyleSheet } from '@react-pdf/renderer'
import { List } from './list'

const styles = StyleSheet.create({
  item: {
    marginBottom: 10
  },
  text: {
    fontSize: 11,
    color: '#3A3A3A'
  }
})

type EducationProps = {
  name: string
  summary: string
}

export const Education = () => (
  <View>
    <View style={styles.item}>
      <List>High School</List>

      <Text style={styles.text}>IFRO (2020 - 2023)</Text>
    </View>

    <View style={styles.item}>
      <List>Information systems</List>

      <Text style={styles.text}>
        Centro Universitário São Lucas (2020 - 2023)
      </Text>
    </View>
  </View>
)
