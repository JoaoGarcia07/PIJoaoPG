import { Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { styles } from '../lib/styles'

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Oi eu sou Home Screen!</Text>
      <Button
        style={{ width: '40%', marginBottom: '10px' }}
        mode="contained"
        onPress={() => navigation.navigate('Sobre')}
      >
        SOBRE
      </Button>
      <Button
        style={{ width: '40%', marginBottom: '10px' }}
        mode="contained"
        onPress={() => navigation.navigate('Contato')}
      >
        CONTATO
      </Button>
    </View>
  )
}
