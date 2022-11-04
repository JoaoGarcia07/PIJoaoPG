import { useState } from 'react'
import { Text, View } from 'react-native'
import {
  Button,
  RadioButton,
  Searchbar,
  TextInput,
  ToggleButton,
} from 'react-native-paper'
import { styles } from '../lib/styles'

export const ContatoScreen = () => {
  const [text, setText] = useState('')
  const [senha, setSenha] = useState('')
  const [nome, setNome] = useState('')
  const [checked, setChecked] = useState('first')
  const [searchQuery, setSearchQuery] = useState('')

  const onChangeSearch = (query) => setSearchQuery(query)

  return (
    <View style={styles.container}>
      <Text style={styles.textcont}>Eu sou a Página Contato</Text>
      <Searchbar
        style={styles.pesquisa}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <TextInput style={styles.retan}
        label="Nome"
        value={nome}
        onChangeText={(nome) => setNome(nome)}
      />

      <TextInput style={styles.retan}
        label="Email"
        value={text}
        onChangeText={(text) => setText(text)}
      />

      <TextInput style={styles.retan}
        label="Senha"
        value={senha}
        onChangeText={(senha) => setSenha(senha)}
      />

      <View style={styles.opa}>
        <RadioButton
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')}
        />
         <Text>MASCULINO</Text>
      </View>

      <View style={styles.opa}>
        <RadioButton
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('second')}
        />
         <Text>FEMININO </Text>
      </View>

      <Button style={styles.botao} mode="contained">
        SALVAR
      </Button>
    </View>
  )
}
