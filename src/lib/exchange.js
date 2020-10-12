import React, { useState, useEffect } from 'react'

export const Exchange = () => {
  const [rateInfo, setRateInfo] = useState('')

  const API_KEY = process.env.REACT_APP_API_KEY
  const RATE_URL = `http://data.fixer.io/api/latest?access_key=${API_KEY}&symbols=SEK`


  // const FetchNewData = () => {
  //   useEffect(() => {
  //     fetch(RATE_URL)
  //       .then(res => res.json())
  //       .then(json => {
  //         console.log('Exchange rate', json)
  //         setRateInfo(json)
  //       })
  //   }, [])
  // }

  // FetchNewData()

  useEffect(() => {
    const fetchNewData = () => {
      fetch(RATE_URL)
      .then(res => res.json())
      .then(json => {
        console.log('Exchange rate', json)
        setRateInfo(json)
      })
    }  

    fetchNewData()
  }, [])

  // DATE AND TIME OF FETCH
  const timestamp = rateInfo.timestamp
  let dateObject = new Date(timestamp * 1000)
  let printTime = dateObject.toLocaleString('en-GB')


  return (
    <div>
      <h3>SEK ➡️ EUR</h3>
      {rateInfo && <h4>{rateInfo.rates.SEK}</h4>}
      {printTime && <h5>{printTime}</h5>}
      <button onClick={() => FetchNewData()}>
        Update
      </button>
    </div>
  )
}