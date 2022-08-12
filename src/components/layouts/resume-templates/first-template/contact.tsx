/* eslint-disable jsx-a11y/alt-text */
import { Text, View, StyleSheet, Image, Link } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  },
  text: {
    marginLeft: 8,
    color: '#3A3A3A'
  }
})

type ContactProps = {
  name: string
  summary: string
}

export const Contact = () => (
  <View style={styles.container}>
    <View style={styles.item}>
      <Image
        source="./images/icon-link.png"
        style={{ width: '24px', height: '24px' }}
      />

      <Link src="https://gabrielcastilho.com">
        <Text style={styles.text}>gabrielcastilho.com</Text>
      </Link>
    </View>

    <View style={styles.item}>
      <Image
        source="./images/email.png"
        style={{ width: '24px', height: '24px' }}
      />

      <Link src="gabrielcastilho.com" style={{ textDecoration: 'none' }}>
        <Text style={styles.text}>abc@gmail.com</Text>
      </Link>
    </View>

    <View style={styles.item}>
      <Image
        source="./images/phone.png"
        style={{ width: '24px', height: '24px' }}
      />

      <Link src="gabrielcastilho.com" style={{ textDecoration: 'none' }}>
        <Text style={styles.text}>69 9 9294-3081</Text>
      </Link>
    </View>

    <View style={styles.item}>
      <Image
        source="./images/github.png"
        style={{ width: '24px', height: '24px' }}
      />

      <Link src="gabrielcastilho.com" style={{ textDecoration: 'none' }}>
        <Text style={styles.text}>GabrielCastilhoV</Text>
      </Link>
    </View>

    <View style={styles.item}>
      <Image
        source="./images/linkedin.png"
        style={{ width: '24px', height: '24px' }}
      />

      <Link src="gabrielcastilho.com" style={{ textDecoration: 'none' }}>
        <Text style={styles.text}>GabrielCastilhoV</Text>
      </Link>
    </View>
  </View>
)
