import React,{ useState } from 'react'
import {StyleSheet, View ,TextInput , Button , Text} from 'react-native';
import { create } from 'react-test-renderer';

export default function AddToDo({submitHandler}){
    const [text,setText] = useState('');

    const changeHandler = (val) => {
       setText(val);
    }
    return(
        <View>
            <TextInput
            style={styles.input}
            placeholder='new todo...'
            onChangeText={changeHandler}
            />
            <Button onPress ={() => submitHandler(text)} title='+add todo' color='coral'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical: 6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        
    },
})