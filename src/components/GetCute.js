import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Giphy } from './Giphy'
import { Button } from 'lib/Button'

//Allows user to fetch GIF when pushing a button
/*Conditionally renders the headline and GIF 
  depending on if the button has been clicked*/

export const GetCute = () => {
  const [buttonPushCount, setButtonPushCount] = useState(0)

  //counts how often the button is pushed
  const handleButtonPush = () => {
    setButtonPushCount(buttonPushCount + 1)
  }

  return (
    <WidgetDiv>
      {!buttonPushCount && <Headline>Do you need some cute in your life?</Headline>}
       {buttonPushCount > 0 && <Giphy key={buttonPushCount} />}
      <Button
        buttonName='Get cute!'
        onClickFunction={() => {handleButtonPush()}} />
    </WidgetDiv>
  )
}

const WidgetDiv = styled.div`
  margin: 10px;
  background: rgba(255, 255, 255, 0.5);
  border: 4px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Headline = styled.h2`
  margin: 20px;
  text-align: center;
`