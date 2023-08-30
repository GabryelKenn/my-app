import React, { useState } from 'react';
import { Button, TextInput, View, Text, Alert } from 'react-native';

const DigiteSeuNome = () => {
  const [nome, setNome] = useState('');
  const [nomeEnviado, setNomeEnviado] = useState('');

  const handleEnviar = () => {
    if (nome.trim() === '') {
      Alert.alert('Erro', 'Digite um nome válido');
      return;
    }

    setNomeEnviado(nome);
  };

  return (
    <View style={style.container}>
      <Text style={style.texto}>Digite Seu Nome</Text>

        <Text style={style.texto}>Nome: {nomeEnviado}</Text>
      
      <TextInput
        style={style.input}
        onChangeText={text => setNome(text)}
        value={nome}
      />

      <Button title="Enviar" onPress={handleEnviar} />


    </View>
  );
};

const style = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 20,
  },
};

export default DigiteSeuNome;
