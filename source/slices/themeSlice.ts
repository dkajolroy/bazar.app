import {createSlice} from '@reduxjs/toolkit';
import {useColorScheme} from 'react-native';
import {dark, light} from '../constants/colors';

const systemTheme = useColorScheme();
const COLORS = systemTheme === 'dark' ? dark : light;
const initialState = {
  name: systemTheme,
  COLORS,
};
const themeSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    toggleTheme: theme => {
      if (theme.name === 'dark') {
        (theme.name = 'light'), (theme.COLORS = light);
      } else {
        theme.name = 'dark';
        theme.COLORS = dark;
      }
    },
  },
});

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;
