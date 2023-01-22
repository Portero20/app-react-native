import {} from 'react-native'

import React from "react";

const CustomModal = ({isModalVisible, selectedTask, onHandleCancel, onHandleDelete}) => {

    return (

        <Modal visible={isModalVisible} animationType='slide'>
        <View style={styles.modalContainer}>

            <Text style={styles.modalTitle}>Lista de Peliculas</Text>
            <View style={styles.modalDetailContainer}>
                <Text style={styles.modalDetailMessage}>¿Estas seguro que quieres eliminar esta pelicula?</Text>
                <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
            </View>
            <View style={styles.modalButtonContainer}>
                <Button title='Cancel' color='#626893' onPress={onHandleCancel}></Button>
                <Button title='Delete' color='red' onPress={onHandleDelete}></Button>
            </View>

        </View>
      </Modal>

    )

}

export default CustomModal;