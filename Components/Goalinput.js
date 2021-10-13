import React, { useState } from 'react';
import { View,Button,StyleSheet ,TextInput , Modal} from 'react-native';
const Goalinput = props => {
  const [enteredGoal , setEnteredGoal] = useState('');
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
}
const addGoalHandler = () => {
  props.onaddgoal(enteredGoal);
  setEnteredGoal('');
}

return ( 
  <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
        <TextInput
          placeholder="Goals"
          style={styles.input} 
          onChangeText={goalInputHandler}/>
        <View style={styles.button}>
          <View style={{width:'50%'}}><Button title="ADD" onPress={addGoalHandler} /></View>
          <View><Button title="cancel" color="red" onPress={props.cancel}/></View>
        </View>
    </View>
  </Modal>
)
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10,
    flex:1,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 8,
    width: '80%',
    margin : '1%',
  },
  button : {
    marginTop : 10,
    flexDirection : 'row',
    justifyContent : 'space-between',
    width : '40%'
  }
  
})

export default Goalinput;