import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { Giphy } from './Giphy'

export const GetCute = () => {
  const [buttonPushed, setButtonPushed] = useState(false)

  return (
    <WidgetDiv>
      {buttonPushed && <Giphy />}
      <CuteButton
        onClick={setButtonPushed}>
          Get Cute!
      </CuteButton>
    </WidgetDiv>
  )
}

const WidgetDiv = styled.div`
  margin: 10px;
  background: rgba(255, 255, 255, 0.5);
  border: 4px solid black;
`

const CuteButton = styled.button`
  width: 150px;
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  margin: 10px;
  padding: 8px;
  border: none;
  color: #fff;
  background: #8226de;

  &:hover {
    background-color: #fca103;
  }
`