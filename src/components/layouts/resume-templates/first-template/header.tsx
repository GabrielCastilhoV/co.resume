import { Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#282828'
  },
  summary: {
    fontSize: 14,
    color: '#3A3A3A',
    marginTop: 10
  }
})

type HeaderProps = {
  name: string
  summary: string
}

export const Header = () => (
  <View>
    <Text style={styles.title}>YOUR NAME</Text>

    <Text style={styles.summary}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industrys standard dummy text ever since the
      1500s, when an unknown printer too
    </Text>
  </View>
)
