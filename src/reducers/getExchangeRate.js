import { createSlice } from '@reduxjs/toolkit'

export const fetchRate = createSlice({
  name: 'rateData',
  initialState: {
    rateInfo: []
  },
  reducers: {
    addData: (state, action) => {
      state.rateInfo = action.payload
    }
  }
})

export const getExchangeRate = () => {
  const API_KEY = process.env.REACT_APP_API_KEY
  const RATE_URL = `http://data.fixer.io/api/latest?access_key=${API_KEY}&symbols=SEK`

  return (dispatch) => {
    fetch(RATE_URL)
      .then((res) => res.json())
      .then((json) => {
        dispatch(rateData.actions.addData(json))
      })
  }
}