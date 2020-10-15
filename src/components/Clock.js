import React from 'react'
// import Moment from 'moment'
import 'moment-timezone'
import Clock from 'react-live-clock'
import FitText from '@kennethormandy/react-fittext'
import styled from 'styled-components/macro'

export const ClockWidget = () => {
  return (
    <WidgetDiv>
      <FitText
        maxFontSize={60}
        compressor={1.7}>
        <>
          <Time>
            <Clock
              format={'HH:mm'}
              ticking={true}
              timeZone={'Europe/Stockholm'} />
          </Time> 
        </>
      </FitText>
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

