import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'

import { Exchange } from './components/exchange'
import { ClockWidget } from './components/Clock'
import { Memos } from './components/Memos'
import { memoList } from 'reducers/memoList'

const reducer = combineReducers({
  memoList: memoList.reducer
})

const persistedState = localStorage.getItem("reduxState") ? JSON.parse(localStorage.getItem("reduxState")) : {}

const store = createStore(reducer, persistedState)

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()))
})

export const App = () => {
  return (
    <Provider store={store}>
      <h1>Hello Caspeco!</h1>
      <Exchange />
      <ClockWidget />
      <Memos />
    </Provider>
  )
}
