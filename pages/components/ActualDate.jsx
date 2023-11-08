import React, { useState } from 'react'

const ActualDate = () => {

    const fullDate = new Date();
    const date = fullDate.toLocaleDateString()
    
    
  return (
    <div>{date}</div>
  )
}

export default ActualDate