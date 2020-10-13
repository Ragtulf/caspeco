import React from 'react'
import Clock from 'react-live-clock'

export const ClockWidget = () => {
  return (
    <div>
      <Clock />
    </div>
  )
}

// format={'HH:mm'} ticking={true} timeZone={'Europe/Stockholm'}