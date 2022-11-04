import { Button, Text, View } from 'react-native'
import { styles } from '../lib/styles'

export const SobreScreen = ({ navigation }) => {
  return (
    <View style={styles.containersobre}>
      <Text style={styles.sobre}>Oi eu sou a Sobre Screen</Text>
      <Button
        title="Ir para Céu"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}
