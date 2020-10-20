import React from 'react'
import 'moment-timezone'
import Clock from 'react-live-clock'
import FitText from '@kennethormandy/react-fittext'
import styled from 'styled-components/macro'

//FitText is a responsive text component
//Shows a clock from an external library

export const ClockWidget = () => {
  return (
    <WidgetDiv>
      <FitText
        maxFontSize={60}
        compressor={2} >
        <FlexDiv>
          <Time>
            <Clock
              format={'HH:mm'}
              ticking={true}
              timeZone={'Europe/Stockholm'} />
          </Time> 
        </FlexDiv>
      </FitText>
    </WidgetDiv>
  ) 
}

const WidgetDiv = styled.div`
  margin: 10px;
  background: rgba(255, 255, 255, 0.5);
  border: 4px solid black;
`

const FlexDiv = styled.div`
  display: flex;
  justify-content: center;
`

const Time = styled.h2`
  margin: 0;
  font-size: 8em;
`