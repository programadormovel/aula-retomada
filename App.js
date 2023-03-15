import React from 'react'
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native'
import Botao from './Botao'

const App = () => {
  return (
    <View>
      <Text>Digite seu nome:</Text>
      <TextInput />
      <Text>Digite seu sobrenome:</Text>
      <TextInput />
      <TouchableOpacity>
        <Text>BOTÃO</Text>
      </TouchableOpacity>
      <Botao texto="novo" />
    </View>
  )
}

export default App;