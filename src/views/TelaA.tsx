import React from 'react'
import { View, Text } from 'react-native'
import TextoCentral from '../components/TextoCentral'
import PassoStack from '../components/PassoStack'


export default props => {

    return (
        <PassoStack {...props} avancar="TelaB">
            <TextoCentral corFundo='#e53935'>
                Tela A
            </TextoCentral>
        </PassoStack>

    )
}