import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { Button } from 'lib/Button'

export const Exchange = () => {
  const [rateInfo, setRateInfo] = useState('')
  const [date, setDate] = useState('')

  const RATE_URL = 'https://api.exchangeratesapi.io/latest?symbols=SEK'

  // Fetch the exchange rate data to the API
  const fetchNewData = () => {
    fetch(RATE_URL)
      .then(res => res.json())
      .then(json => {
        setRateInfo(json)
        console.log(json)
        setDate(json.date)
      })
  }

  /* Runs the fetchNewData function once when page is loaded
    and then every time the button is clicked */
  useEffect(() => fetchNewData(), [])

  // Fixes the format on date
  const newDateFormat = date => {
    const [yy, mm, dd] = date.split(/-/g)
    return `${dd}/${mm}/${yy}`
  }
  const printDate = (newDateFormat(date))


  return (
    <WidgetDiv>
      <ContentDiv>
        <Heading>SEK <Arrow src='/arrow.svg' alt='arrow to the right' /> EUR</Heading>
        <FlexDiv>
          {rateInfo && <RateText>{rateInfo.rates.SEK}</RateText>}
          {printDate && <DateText>{printDate}</DateText>}
        </FlexDiv>
        <Button
          onClickFunction={() => fetchNewData()}
          buttonName='Update' />
      </ContentDiv>
    </WidgetDiv>
  )
}

const WidgetDiv = styled.div`
  margin: 10px;
  background: rgba(255, 255, 255, 0.5);
  border: 4px solid black;
  display: flex;
  flex-direction: column;

  @media (min-width: 500px) {
    width: 40%;
    height: 200px;
  }
`

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 500px) {
    height: 600px;
  }
`

const Heading = styled.h3`
  align-self: center;
  font-size: 4em;
  margin: 10px;

  @media (min-width: 500px) {
    font-size: 1.8em;
  }

  @media (min-width: 700px) {
    font-size: 3em;
  }
`

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px;

  @media (min-width: 500px) {
    flex-direction: column;
  }
`

const Arrow = styled.img`
  width: 40px;

  @media (min-width: 500px) {
    width: 25px;
  }
`

const RateText = styled.h4`
  font-size: 2.5em;
  margin: 10px 10px;
  align-self: center;

  @media (min-width: 500px) {
    font-size: 2em;
    margin-top: 0;
  }
`

const DateText = styled.h5`
  font-size: 0.7em;
  margin: 5px 10px;
  align-self: center;
`