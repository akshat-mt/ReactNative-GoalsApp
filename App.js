import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Goalitem from './Components/GoalItem';
import Goalinput from './Components/Goalinput';
export default function App() {
 
  const [displayGoals , setdisplayGoals] = useState([]);
  const [isAddModal , setisAddModal] = useState(false);

 const goalsDisplayHandler = (goaltitle) => {
   setdisplayGoals(currentGoals => [...currentGoals , 
    { key:Math.random().toString() , value:goaltitle} 
  ]);
  setisAddModal(false);
 }
 const deleteGoalHandler = (goalItem) => { 
      setdisplayGoals (currentGoals => {
        return currentGoals.filter((goal) => goal.key !== goalItem);
      })
 }
 onCancelHandler = () => {
      setisAddModal(false);
 }
  return (
    
    <View style={styles.screen}>
      <Button title="Start Adding Goals"  onPress={() => setisAddModal(true)} />
      <Goalinput visible={isAddModal} onaddgoal={goalsDisplayHandler} cancel={onCancelHandler} />
      <FlatList data={displayGoals} renderItem={items => 
         <Goalitem id={items.item.key} ondelete = {deleteGoalHandler} title = {items.item.value} />
         } />
    </View>   
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 60,
  },
 
  

});

