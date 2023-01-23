import {Button, Text, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';

import React from "react";
import {styles} from './styles';

const TaskItem = ({item, onHandlerModal}) => {

    return(

        <View>

            <TouchableWithoutFeedback onPress={() => alert('Pressed')} accessibilityRole='checkbox'>
                <Text>Check</Text>
            </TouchableWithoutFeedback>

            <TouchableOpacity style={styles.itemContainer} onPress={() => onHandlerModal(item)}>
                <Text style={styles.itemList}>{item.value}</Text>
            </TouchableOpacity>

        </View>

        
    )

}

export default TaskItem;