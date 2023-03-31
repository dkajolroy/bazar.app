import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};
const counterSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    toggleCounter: theme => {
      theme.value = theme.value + 1;
    },
  },
});

export const {toggleCounter} = counterSlice.actions;
export default counterSlice.reducer;
