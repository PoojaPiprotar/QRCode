import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export const InputComponent = ({text, onChangeText}) => {
  return (
    <View style={{marginBottom: 20, width: '80%', alignSelf: 'center'}}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'black',
  },
});
