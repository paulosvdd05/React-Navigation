import React from 'react'
import {View, Text} from 'react-native'
import TextoCentral from '../components/TextoCentral'


export default props => {
    props.navigation.navigate("TelaB")
    return (
        <TextoCentral corFundo='#e53935'>
            Tela A
        </TextoCentral>
    )
}