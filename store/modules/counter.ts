import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0, prevValues: [] }; // 초기 상태 정의

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action) => {
      console.log('proxy obj: ', state);
      console.log('action: ', action);

      state.value += 1;
      state.prevValues.push(action.payload.value);
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions; // 액션 생성함수
export default counterSlice.reducer; // 리듀서
