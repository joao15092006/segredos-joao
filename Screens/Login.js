import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

// compoente
import BaseCard from '../components/BaseCard'
import BaseModal from '../components/BaseModal'

// context
import { UserContextGlobal } from '../context/UserContext'

export default function Login() {
  const { email, setEmail, senha, setSenha, fazerLogin, showModal } = React.useContext(UserContextGlobal)

  return (
    <View style={estilo.content}>
      <Image style={estilo.img} source="https://img.icons8.com/isometric/100/password.png" />
      <BaseCard title="Login do APP" sub="Tudo no sigilo 🔒">
      <TextInput
          label="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
          mode="outlined"
        />
        <TextInput
          label="E-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
          mode="outlined"
        />
        <TextInput
          label="Senha"
          value={senha}
          onChangeText={(text) => setSenha(text)}
          mode="outlined"
        />
        <Button style={estilo.btn} mode="contained" onPress={fazerLogin}>Entrar</Button>
        <Button onPress={showModal} style={{ marginTop: 10 }}>Cadastrar</Button>
      </BaseCard>
      <BaseModal>
        <Text>Cadastro do usuário</Text>
        <TextInput
          label="E-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
          mode="outlined"
        />
        <TextInput
          label="Senha"
          value={senha}
          onChangeText={(text) => setSenha(text)}
          mode="outlined"
        />
        <Button style={estilo.btn} mode="contained" onPress={cadastrar}>Cadastrar</Button>
        <Button onPress={hideModal} style={{ marginTop: 10 }}>Cancelar</Button>
      </BaseModal>
    </View>
  )
}

const estilo = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#eeaa45',
    padding: 20,
    justifyContent: 'center'
  },
  btn: {
    marginTop: 8,
    backgroundColor: '#25ae32'
  },
  img: {
    width: 75,
    height: 75,
    alignSelf: 'center',
    marginBottom: 15
  }
})