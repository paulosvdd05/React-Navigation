import React from 'react'
import {View, Text} from 'react-native'
import TextoCentral from '../components/TextoCentral'


export default props => {
    const r = props.rout
    const numero = props.rout
     && r.params
     && r.params.numero ? r.params.numero : 0
    return (
        <TextoCentral corFundo='#9932cd'>
            Tela C - {numero}
        </TextoCentral>
    )
}