import { useState } from 'react'

import React from 'react'

const API_KEY = process.env.REACT_APP_NASA_API_KEY

const ApodSearch = () => {
  const [date, setDate] = useState('')
  const [image, setImage] = useState([])

  const fetchImage = async (reqDate) => {
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${reqDate}`
    )

    const data = await res.json()

    setImage(data)
  }

  const handleChange = (event) => setDate(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()

    fetchImage(date)

    setDate('')
  }

  return (
    <div className='hero min-h-screen w-screen'>
      <div className='hero-content  justify-center  flex-col lg:flex-row-reverse'>
        {Object.keys(image).length > 0 && (
          <img
            className='max-w-full max-h-max  shadow-2xl'
            src={image.hdurl}
            alt='No Image for this date'
          />
        )}
        <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl  '>
          <form className='card-body ' onSubmit={handleSubmit}>
            <div className='form-control'>
              <div className='relative'>
                <input
                  type='date'
                  className='w-full pr-40 input input-bordered input-lg '
                  placeholder='Search'
                  value={date}
                  onChange={handleChange}
                />
                <button
                  type='submit'
                  className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
                >
                  Go
                </button>
              </div>
            </div>
          </form>
          <div>
            <h1 className='text-3xl font-bold px-6'>
              {image.title || 'Choose a date to view an image'}
            </h1>
            <p className='py-6 px-6'>{image.explanation}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApodSearch
