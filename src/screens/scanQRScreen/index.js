import React, {useState} from 'react';
import {StyleSheet, Text, Linking, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

export const ScanQRScreen = () => {
  const [QRVal, setQRval] = useState();

  const onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };
  return (
    <View style={styles.root}>
      <QRCodeScanner
        onRead={onSuccess}
        containerStyle={{alignItems: 'center'}}
        cameraStyle={{
          height: 200,
          width: 200,
        }}
        onRead={e => {
          console.log(e?.data);
          setQRval(e?.data);
        }}
        bottomContent={
          QRVal && (
            <Text style={{color: 'black', paddingVertical: 20}}>{QRVal}</Text>
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
