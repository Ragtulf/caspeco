import React from 'react'
// import styled from 'styled-components/macro'
import { Exchange } from './components/exchange'
import { Clock } from './components/clock2'
// import { ClockWidget } from './components/clockWidget'

export const App = () => {
  return (
    <div>
      <h1>Hello Caspeco!</h1>
      <Exchange />
      <Clock />
      {/* <ClockWidget /> */}
    </div>
  )
}
