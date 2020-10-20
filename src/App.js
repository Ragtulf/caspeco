import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import styled from 'styled-components/macro'

import { Exchange } from './components/exchange'
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
      <FlexDiv>
        <Headline>Hello Caspeco! <span role="img" aria-label="stars">✨</span></Headline>
        <ClockWidget />
        <ExchangeAndMemosDiv>
          <Exchange />
          <Memos />
        </ExchangeAndMemosDiv>
        <GetCute />
      </FlexDiv>
    </Provider>
  )
}

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1000px) {
    width: 800px;
  }
`

const Headline = styled.h1`
  font-size: 2.5em;
  text-align: center;

  @media (min-width: 500px) {
    font-size: 3em;
  }
`

const ExchangeAndMemosDiv = styled.div`
  @media (min-width: 500px) {
    display: flex;
    justify-content: space-between;
  }
`