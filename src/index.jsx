import { Button, FlatList, Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';

import {styles} from './styles';
import { useState } from 'react';

const App = () => {

  const [task,setTask] = useState('');

  const [tasks, setTasks] = useState([]);

  const [isModalVisible, setModalVisible] = useState(false);

  const [selectedTask, setSelectedTask] = useState(null);

  const onHandlerChange = (text) => {

    setTask(text)

  }

  const onHandlerSubmit = () => {

    setTasks([
      ...tasks,
      {
        id: Math.random().toString(),
        value: task
      }
    ]);

    setTask('');

  }

  const onHandlerModal = (item) => {
    
    setModalVisible(!isModalVisible);
    setSelectedTask(item);

  }

  const renderItem = ({item}) => (

    <TouchableOpacity style={styles.itemContainer} onPress={() => onHandlerModal(item)}>
      <Text style={styles.itemList}>{item.value}</Text>
    </TouchableOpacity>

  )

  const keyExtractor = (item) => item.id;

  const onHandleCancel = () => {

    setModalVisible(!isModalVisible);
    setSelectedTask(null);

  }

  const onHandleDelete = () => {

    setTasks((prevTaskList) => prevTaskList.filter((task) => task.id !== selectedTask.id));
    setModalVisible(!isModalVisible);

  }

  console.warn('tasks', tasks)

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        
        <TextInput placeholder='add a new task' style={styles.input} autoCapitalize='none' autoCorrect={false} value={task} onChangeText={onHandlerChange}/>

        <Button disabled={!task} title='Add' color='#626893' onPress={onHandlerSubmit}/>

      </View>

      <FlatList data={tasks} renderItem={renderItem} keyExtractor={keyExtractor} style={styles.listContainer}/>

      <Modal visible={isModalVisible} animationType='slide'>
        <View style={styles.modalContainer}>

            <Text style={styles.modalTitle}>Task Detail</Text>
            <View style={styles.modalDetailContainer}>
                <Text style={styles.modalDetailMessage}>Are you sure yo delete this item?</Text>
                <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
            </View>
            <View style={styles.modalButtonContainer}>
                <Button title='Cancel' color='#626893' onPress={onHandleCancel}></Button>
                <Button title='Delete' color='red' onPress={onHandleDelete}></Button>
            </View>

        </View>
      </Modal>

    </View>
  );
}

export default App;

