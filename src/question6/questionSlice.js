import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  question: "",
  answer: ""
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    setQuestion: (state, action) => {
      state.question = action.payload;
    },
    setAnswer: (state, action) => {
      state.answer = action.payload;
    }
  }
});

export const { setQuestion, setAnswer } = questionSlice.actions;
export default questionSlice.reducer;
