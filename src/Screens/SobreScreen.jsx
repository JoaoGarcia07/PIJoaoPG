import { Button, Text, View } from 'react-native'

export const SobreScreen = ({ navigation }) => {
  return (
    <View >
      <Text>OI eu seu a Sobre Screen</Text>
      <Button
        title="Ir para Céu"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}
