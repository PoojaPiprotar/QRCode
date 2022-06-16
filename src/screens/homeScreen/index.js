import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ButtonComponent} from '../../components/ButtonComponent';
import {constants} from '../../utils/constants';

export const HomeScreen = ({navigation}) => {
  return (
    <View style={style.root}>
      <ButtonComponent
        title="Scan QR"
        onPress={() => {
          navigation.navigate(constants.QRSCAN);
        }}
      />
      <ButtonComponent
        title="Generate QR"
        onPress={() => {
          navigation.navigate(constants.GENERATEQR);
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
