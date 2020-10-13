import React, { useState, useEffect } from 'react'

export const Clock = () => {
  

  const useClock = (initialTime = new Date()) => {
    const [time, setTime] = useState(initialTime)

    useEffect(() => {
      const id = setInterval(() => {
        setTime(() => new Date())
      }, 1000)
      return () => clearInterval(id)
    }, [])

    console.log(time)
    return time
  }

  return (
    <div>
      <h2>Clock</h2>
    </div>
  )
}