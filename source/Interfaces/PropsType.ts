import {store} from '../store/store';

//Reducers Types
export type RootStateProps = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

// Main Navigation
export type RootStackParamList = {
  HOME: undefined;
  PROFILE: undefined;
  VIEWPRODUCT: undefined;
};
