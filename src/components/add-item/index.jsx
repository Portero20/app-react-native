import { Button, TextInput, View } from "react-native";

import React from "react";
import {styles} from './styles';

const AddItem = ({placeholder, task, onHandlerChange, buttonText, buttonColor, onHandlerSubmit}) => {

    return(

        <View style={styles.inputContainer}>
        
            <TextInput placeholder={placeholder} style={styles.input} autoCapitalize='none' autoCorrect={false} value={task} onChangeText={onHandlerChange}/>

            <Button disabled={!task} title={buttonText} color={buttonColor} onPress={onHandlerSubmit}/>

        </View>

    )

}

export default AddItem;