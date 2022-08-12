import { Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  container: {
    marginBottom: 15
  },
  item: {
    marginBottom: 10
  },
  circles: {
    marginTop: 5,
    flexDirection: 'row'
  },
  inactive: {
    width: 16,
    height: 16,
    backgroundColor: 'gray',
    borderRadius: 999,
    marginRight: 5
  },
  active: {
    width: 16,
    height: 16,
    backgroundColor: '#376FFE',
    borderRadius: 999,
    marginRight: 5
  }
})

type LanguagesProps = {
  name: string
  summary: string
}

export const Languages = () => {
  const english = 3
  const portuguese = 5

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text>English</Text>

        <View style={styles.circles}>
          {Array.from({ length: 5 }, (_, index) => index + 1).map((item) => (
            <View
              key={item}
              style={item <= english ? styles.active : styles.inactive}
            />
          ))}
        </View>
      </View>

      <View style={styles.item}>
        <Text>Portuguese</Text>

        <View style={styles.circles}>
          {Array.from({ length: 5 }, (_, index) => index + 1).map((item) => (
            <View
              key={item}
              style={item <= portuguese ? styles.active : styles.inactive}
            />
          ))}
        </View>
      </View>
    </View>
  )
}
