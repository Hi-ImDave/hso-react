import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

const API_KEY = process.env.REACT_APP_NASA_API_KEY

const ApodResults = ({ title, paramType, param }) => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchRandomPhoto()
  }, [])

  const fetchRandomPhoto = async () => {
    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=${param}`
    )

    const data = await res.json()

    setImages(data)
  }

  return (
    <div className='grid grid-cols-1 gap8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {images.map((image, index) => (
        <div key={index} className='custom-card-image mb-6 md:mb-0'>
          <div className='rounded-lg shadow-xl card image-full'>
            <figure>
              <img src={image.url} alt='' />
            </figure>
          </div>
          <Link
            to='/apod'
            className='card-title mb-0 justify-center btn btn-ghost'
          >
            {(title && title) || image.title}
          </Link>
        </div>
      ))}
    </div>
  )
}

ApodResults.defaultProps = {
  paramType: 'count',
  param: 1,
}

export default ApodResults
