import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootStateProps} from '../Interfaces/PropsType';
import {toggleCounter} from '../slices/counterSlice';
import {toggleTheme} from '../slices/themeSlice';

export default function HomeScreen() {
  const {COLORS} = useSelector((state: RootStateProps) => state.theme);
  const {value} = useSelector((state: RootStateProps) => state.counter);
  const dispatch = useDispatch();
  console.log(value);
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: COLORS.black, fontSize: 40}}>HomeScreen</Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          padding: 10,
        }}
        onPress={() => dispatch(toggleTheme())}>
        <Text>Home Click</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          padding: 10,
        }}
        onPress={() => dispatch(toggleCounter())}>
        <Text>Counter Click</Text>
      </TouchableOpacity>
    </View>
  );
}
