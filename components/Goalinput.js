import React, {useState} from 'react';
import {Button, TextInput, View, StyleSheet, Modal} from "react-native";

const Goalinput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (e) => {
        setEnteredGoal(e)
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    return (
        <Modal style={styles.modal} visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}/>

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="CANCEL"
                            color="red"
                            onPress={props.onCancel}/>
                    </View>

                    <View style={styles.button}>
                        <Button
                            title="ADD"
                            onPress={addGoalHandler}/>
                    </View>
                </View>

            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: '40%'
    }
});

export default Goalinput