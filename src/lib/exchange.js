import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export const Exchange = () => {
  const [rateInfo, setRateInfo] = useState('')

  const API_KEY = process.env.REACT_APP_API_KEY
  const RATE_URL = `http://data.fixer.io/api/latest?access_key=${API_KEY}&symbols=SEK`

   /* SINCE I'M NOT ON A SUBSCRIPTION PLAN WITH FIXER.IO
    I ONLY GET HOURLY UPDATES ON THE RATES */
  const fetchNewData = () => {
    fetch(RATE_URL)
      .then(res => res.json())
      .then(json => {
        console.log('Exchange rate', json)
        setRateInfo(json)
      })
  }

  useEffect(() => fetchNewData(), [])


  // DATE AND TIME OF FETCH
  const timestamp = rateInfo.timestamp
  let dateObject = new Date(timestamp * 1000)
  let printTime = dateObject.toLocaleString('en-GB')


  return (
    <WidgetDiv>
      <Heading>SEK ➡️ EUR</Heading>
      {rateInfo && <h4>{rateInfo.rates.SEK}</h4>}
      {printTime && <h5>{printTime}</h5>}
      <button onClick={() => fetchNewData()}>
        Update
      </button>
    </WidgetDiv>
  )
}

const WidgetDiv = styled.div`
  background: rgba(255, 255, 255, 0.5);
  border: 3.5px solid black;
`

const Heading = styled.h3`
  font-size: 1.8em;
  margin: 10px;
`