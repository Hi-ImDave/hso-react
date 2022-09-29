import React from 'react'
import ApodResults from '../components/apod/ApodResults'

const Apod = () => {
  return (
    <div>
      <ApodResults loadKey='apodpage' paramType='date' param='2022-07-01' />
    </div>
  )
}

export default Apod
