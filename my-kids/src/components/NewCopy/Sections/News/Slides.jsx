import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { styled } from '@mui/material/styles'

import img1 from '../../../../resources/images/1.JPG'
import img2 from '../../../../resources/images/2.JPG'
import img3 from '../../../../resources/images/3.JPG'
import { Paper, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'

const Div = styled(Paper)(({ theme }) => ({
  display: 'flex',
  borderTop: '2px solid #1976d2',
  flexDirection: 'column'
}))
const CarouselContiner = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column'
}))
const Car = styled(Carousel)(({ theme }) => ({
  '& p': {
    display: 'flex',
    flexDirection: 'column',
    height: '100px',
    left: '0 !important',
    marginLeft: '0 !important',
    bottom: ' 0 !important',
    width: '100% !important',
    borderRadius: '0 !important',
    fontWeight: '100',
    fontSize: '1rem !important'
  },
  '& p > span': {
    fontSize: '40px',
    color: 'white',
    fontWidth: 'bold'
  }
}))
const Slides = () => {
  return (
    <CarouselContiner>
      <Typography variant='h5' color={blue[700]}>
        Gallery
      </Typography>
      <Car showThumbs={false} showStatus={false} autoPlay>
        <Div>
          <img src={img1} alt='1' />
          <p className='legend'>
            <span>Legend 1</span> Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Sapiente est porro corrupti doloribus.
          </p>
        </Div>
        <Div>
          <img src={img2} alt='1' />
          <p className='legend'>
            <span>Legend 2</span> Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laborum unde et odio, minima.
          </p>
        </Div>
        <Div>
          <img src={img3} alt='1' />
          <p className='legend'>
            <span>Legend 3</span> Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Recusandae expedita doloremque fugit ea libero.
          </p>
        </Div>
      </Car>
    </CarouselContiner>
  )
}

export default Slides
