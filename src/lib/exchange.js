import React, { useState, useEffect } from 'react'

export const Exchange = () => {
  const [rateInfo, setRateInfo] = useState('')

  const API_KEY = process.env.REACT_APP_API_KEY
  const RATE_URL = `http://data.fixer.io/api/latest?access_key=${API_KEY}&symbols=SEK`

  useEffect(() => {
    fetch(RATE_URL)
      .then(res => res.json())
      .then(json => {
        console.log(process.env.REACT_APP_API_KEY)
        console.log(API_KEY)
        console.log('Exchange rate', json)
        setRateInfo(json)
      })
  }, [])

  return (
    <div>
      <h3>SEK ➡️ EUR</h3>
      {rateInfo && <h4>{rateInfo.rates.SEK}</h4>}
      {rateInfo && <h5>{rateInfo.timestamp}</h5>}
    </div>
  )
}