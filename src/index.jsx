import {AddItem, CustomModal, TaskList} from './components';

import { View } from 'react-native';
import { colors } from './constants/theme/colors';
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
      
      <AddItem buttonColor={colors.primary} buttonText={'Add'} onHandlerChange={onHandlerChange} onHandlerSubmit={onHandlerSubmit} placeholder={'Add a new task'} value={task}/>

      <TaskList tasks={tasks} onHandlerModal={onHandlerModal}/>

      <CustomModal isModalVisible={isModalVisible} onHandleCancel={onHandleCancel} onHandleDelete={onHandleDelete} selectedTask={selectedTask} />

    </View>
  );
}

export default App;

