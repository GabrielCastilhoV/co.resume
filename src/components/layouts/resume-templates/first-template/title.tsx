import { Text, View, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#376FFE',
    borderBottom: '1px solid #D3E4FB',
    paddingBottom: 5,
    marginBottom: 15
  }
})

type TitleProps = {
  title: string
}

export const Title = ({ title }: TitleProps) => (
  <View style={styles.container}>
    <Text>{title}</Text>
  </View>
)
