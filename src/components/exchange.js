import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export const Exchange = () => {
  const [rateInfo, setRateInfo] = useState('')
  const [date, setDate] = useState('')

  const RATE_URL = 'https://api.exchangeratesapi.io/latest?symbols=SEK'

  const fetchNewData = () => {
    fetch(RATE_URL)
      .then(res => res.json())
      .then(json => {
        setRateInfo(json)
        setDate(json.date)
      })
  }

  useEffect(() => fetchNewData(), [])

  // Fix format on date
  const newDateFormat = date => {
    const [yy, mm, dd] = date.split(/-/g)
    return `${dd}/${mm}/${yy}`
  }
  const printDate = (newDateFormat(date))


  return (
    <WidgetDiv>
      <Heading>SEK <Arrow src='/arrow.svg' alt='arrow to the right' /> EUR</Heading>
      {rateInfo && <RateText>{rateInfo.rates.SEK}</RateText>}
      {printDate && <DateText>{printDate}</DateText>}
      <UpdateButton onClick={() => fetchNewData()}>
        Update
      </UpdateButton>
    </WidgetDiv>
  )
}

const WidgetDiv = styled.div`
  margin: 10px;
  background: rgba(255, 255, 255, 0.5);
  border: 4px solid black;
`

const Heading = styled.h3`
  font-size: 3em;
  margin: 10px;
`

const Arrow = styled.img`
  width: 30px;
`

const RateText = styled.h4`
  font-size: 2.5em;
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

  &:hover {
    background-color: #fca103;
  }
`