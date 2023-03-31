import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {store} from '../store/store';

//Reducers Types
export type RootStateProps = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

// Main Navigation
export type RootStackParamList = {
  HOME: undefined;
  PROFILE: undefined;
  SPLASH: undefined;
  VIEWPRODUCT: undefined;
};
export type Props = NativeStackScreenProps<RootStackParamList>;
