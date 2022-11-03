import { useState } from 'react'
import { Text, View } from 'react-native'
import {
  RadioButton,
  Searchbar,
  TextInput,
  ToggleButton,
} from 'react-native-paper'
import { styles } from '../lib/styles'

export const ContatoScreen = () => {
  const [text, setText] = useState('')
  const [senha, setSenha] = useState('')
  const [value, setValue] = useState('left')
  const [checked, setChecked] = useState('first')
  const [searchQuery, setSearchQuery] = useState('')

  const onChangeSearch = (query) => setSearchQuery(query)

  return (
    <View style={styles.container}>
      <Text>Eu sou a Página Contato</Text>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <RadioButton
        value="first"
        status={checked === 'first' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('first')}
      />
      <RadioButton
        value="second"
        status={checked === 'second' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('second')}
      />

      <TextInput
        label="Email"
        value={text}
        onChangeText={(text) => setText(text)}
      />

      <TextInput
        label="Senha"
        value={senha}
        onChangeText={(senha) => setSenha(senha)}
      />

      <ToggleButton.Row
        onValueChange={(value) => setValue(value)}
        value={value}
      >
        <ToggleButton icon="format-align-left" value="left" />
        <ToggleButton icon="format-align-right" value="right" />
      </ToggleButton.Row>
    </View>
  )
}
