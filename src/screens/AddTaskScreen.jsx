import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Dimensions, Pressable, Text} from "react-native";
import {useNavigation, useRoute} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const AddTaskScreen = () => {
    const [task, setTask] = useState('');
    const navigation = useNavigation();
    const route = useRoute();
    const {setTask: setMainTask} = route.params;

    const handleTask = (text) => {
        setTask(text);
    }

    const saveTask = () => {
        setMainTask(task);
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Add Task" onChangeText={handleTask}/>
            <Pressable style={styles.button} onPress={saveTask}>
                <Text style={styles.text}>Save</Text>
            </Pressable>
            {/*<Button title="Save" onPress={saveTask}/>*/}
        </View>
    );
};

export default AddTaskScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d5dbef',
        width: width,
    },
    input: {
        padding: 12,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 6,
        backgroundColor: '#f3ecff',
        fontSize: 18
    },
    button: {
        backgroundColor: '#4A3780',
        marginTop: 20,
        padding: 10,
        borderRadius: 20,
    },
    text: {
        fontSize: 20,
        color: 'white'
    }
});