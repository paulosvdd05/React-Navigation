import React from 'react'
import {View, Text} from 'react-native'
import TextoCentral from '../components/TextoCentral'


export default props => {
    const route = props.rout || {params: {numero:0}}
    return (
        <TextoCentral corFundo='#9932cd'>
            Tela C - {props.route.params.numero}
        </TextoCentral>
    )
}