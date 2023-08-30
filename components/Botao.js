import React from 'react'
import { Button, Text, View } from 'react-native'

const Botao = () => {
    function execultarbotão2(){
        alert ('Botao 2')
    }
  return (
    <View>
        <Text style={Style.texto}> Botão</Text>

        <Button
            title='Botão'
            onPress={()=> alert('Botao 1')}        
        />
        <Button
        title='Botao 2'
        onPress={execultarbotão2}
        />
        <Button
        title='Botao 3'
        onPress={
            function execultarBotao3(){
                alert('Botao 3')
            }
        }
        />


    </View>
  )
}

export default Botao