import React from 'react';
import {Image, StatusBar, View} from 'react-native';
import {Props} from '../Interfaces/PropsType';
import ICONS from '../constants/icons';
import SIZES from '../constants/sizes';

export default function SplashScreen({navigation}: Props) {
  React.useEffect(() => {
    setTimeout(() => {
      //Replace Nav Route
      navigation.replace('HOME');
    }, 4000);
  }, []);
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: SIZES.width / 2.5,
            resizeMode: 'contain',
          }}
          source={ICONS.logo}
        />
      </View>
    </>
  );
}
