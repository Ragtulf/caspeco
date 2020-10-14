import React from 'react'
// import Moment from 'moment'
import 'moment-timezone'
import Clock from 'react-live-clock'
import styled from 'styled-components/macro'

export const ClockWidget = () => {
  return (
    <WidgetDiv>
      <Time>
        <Clock
          format={'HH:mm'}
          ticking={true}
          timeZone={'Europe/Stockholm'} />
      </Time>
    </WidgetDiv>
  )
}

const WidgetDiv = styled.div`
  margin: 10px;
  background: rgba(255, 255, 255, 0.5);
  border: 4px solid black;
`

const Time = styled.h2`
  margin: 10px;
  font-size: 8em;
`

