import React from 'react';
import { View , Text , StyleSheet, Touchable, TouchableOpacity } from 'react-native';
const Goalitem = props => {
    return (
<TouchableOpacity onPress={props.ondelete.bind(this,props.id)}>
    <View style={styles.goalsstyles}>
        <Text>{props.title}</Text>
    </View> 
</TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    goalsstyles : {
        borderColor : 'black',
        borderWidth : 1,
        backgroundColor : '#ccc',
        marginVertical : 10,
        padding : 10,
        justifyContent : 'center',
      }
});

export default Goalitem;