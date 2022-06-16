import React, {useState} from 'react';
import {View, StyleSheet, Keyboard} from 'react-native';
import {ButtonComponent} from '../../components/ButtonComponent';
import {InputComponent} from '../../components/InputComponent';
import QRCode from 'react-native-qrcode-svg';

export const GenerateQAScreen = ({}) => {
  const [text, setText] = useState();
  const [isGenerate, setIsGenerate] = useState(false);

  return (
    <View style={style.root}>
      <InputComponent
        text={text}
        onChangeText={e => {
          setText(e);
          setIsGenerate(false);
        }}
      />
      <ButtonComponent
        title="Generate QR"
        onPress={() => {
          setIsGenerate(true);
          Keyboard.dismiss();
        }}
        disabled={!text}
      />
      <View>
        {isGenerate && (
          <QRCode
            value={text ? text : 'NA'}
            size={250}
            color="black"
            backgroundColor="white"
          />
        )}
      </View>
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
