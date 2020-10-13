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
  let printDate = dateObject.toLocaleDateString('en-GB')


  return (
    <WidgetDiv>
      <Heading>SEK ➡️ EUR</Heading>
      {rateInfo && <RateText>{rateInfo.rates.SEK}</RateText>}
      {printDate && <DateText>{printDate}</DateText>}
      <UpdateButton onClick={() => fetchNewData()}>
        Update
      </UpdateButton>
    </WidgetDiv>
  )
}

const WidgetDiv = styled.div`
  background: rgba(255, 255, 255, 0.5);
  border: 4px solid black;
`

const Heading = styled.h3`
  font-size: 2em;
  margin: 10px;
`

const RateText = styled.h4`
  font-size: 1.8em;
  margin: 10px 10px;
`

const DateText = styled.h5`
  font-size: 0.7em;
  margin: 5px 10px;
`

const UpdateButton = styled.button`
  font-family: 'Karla', sans-serif;
  font-weight: 700;
  margin: 10px;
  padding: 8px;
  border: none;
  color: #fff;
  background: #8226de;
`