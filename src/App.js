import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import styled from 'styled-components/macro'

import { Exchange } from './components/Exchange'
import { ClockWidget } from './components/Clock'
import { Memos } from './components/Memo/Memos'
import { GetCute } from './components/GetCute'
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
      <Headline>Hello Caspeco! <span role="img" aria-label="stars">✨</span></Headline>
      <ClockWidget />
      <Exchange />
      <Memos />
      <GetCute />
    </Provider>
  )
}

const Headline = styled.h1`
  font-size: 2.5em;
  text-align: center;
`