import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Giphy } from './Giphy'

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
      <CuteButton
        onClick={() => {handleButtonPush()}}>
          Get Cute!
      </CuteButton>
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

const CuteButton = styled.button`
  width: 150px;
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  margin: 10px 10px 20px 10px;
  padding: 8px;
  border: none;
  align-self: center;
  color: #fff;
  background: #8226de;

  &:hover {
    background-color: #fca103;
  }

  &:focus {
    outline: 3px solid #5b02b5;
  }
`