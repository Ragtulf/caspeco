import { createSlice } from '@reduxjs/toolkit'

export const memoList = createSlice({
  name: 'memoList',
  initialState: {
    memos: [
      { id: 1, text: 'Have fun' },
      { id: 2, text: 'Buy ice cream' }
    ],
  },
  reducers: {
    // Add a new memo
    addMemoNote: (state, action) => {
      state.memos.push({
        id: state.memos.length +1,
        text: action.payload
      })
    },
    // Remove memo
    removeMemo: (state, action) => {
      state.memos = state.memos.filter((memo) => memo.id !== action.payload)
    }
  }
})