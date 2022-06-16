import React, {useEffect, useState} from 'react';
import {View, Button, FlatList, Text, TouchableOpacity} from 'react-native';
import {constants} from '../../utils/constants';

export const ButtonComponent = ({title, onPress, disabled}) => {
  return (
    <View style={{marginBottom: 20, width: '80%', alignSelf: 'center'}}>
      <Button
        title={title}
        onPress={() => {
          onPress();
        }}
        disabled={disabled}
      />
    </View>
  );
};
