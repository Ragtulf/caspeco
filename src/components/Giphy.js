import React, { useState, useEffect } from 'react'

import styled from 'styled-components/macro'

const apiKey = process.env.REACT_APP_API_KEY
const giphyURL = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=cute&rating=g`

export const Giphy = ( ) => {
  const [gif, setGif] = useState([])

  useEffect(() => {
    fetch(giphyURL)
    .then(res => res.json())
    .then(json => {
      setGif(json.data)
    })
  }, [])

  return (
    <div>
      {gif && <GIF src={gif.image_url} alt={gif.title} />}
    </div>
  )
}

const GIF = styled.img`
  width: 500px;
  height: auto;
  object-fit: cover;
  margin: 10px;
`