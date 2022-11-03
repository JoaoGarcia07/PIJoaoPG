import { Button, Text, View } from 'react-native'
import { styles } from '../lib/styles'

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Oi eu sou Home Screen</Text>
      <Button title="Ir para Sobre" onPress={() => navigation.navigate('Sobre')} />
      <Button title="Ir para Contato" onPress={() => navigation.navigate('Contato')} />
    </View>
  )
}
