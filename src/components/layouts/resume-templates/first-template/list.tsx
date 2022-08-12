import { Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 5
  },
  bulletPoint: {
    width: 10,
    fontSize: 12
  },
  itemContent: {
    flex: 1,
    color: '#3A3A3A',
    fontWeight: 'bold'
  }
})

type ListProps = {
  children: React.ReactNode
}

export const List = ({ children }: ListProps) => (
  <View style={styles.container}>
    <Text style={styles.bulletPoint}>•</Text>
    <Text style={styles.itemContent}>{children}</Text>
  </View>
)
