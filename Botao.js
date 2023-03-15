import React from 'react'
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native'

const Botao = (props) => {
  return (
    <View>
      <TouchableOpacity>
        <Text>{props.texto}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Botao;