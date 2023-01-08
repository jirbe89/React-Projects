import React from 'react'
import Carousel from 'nuka-carousel'
import { ArrowBack } from '@mui/icons-material'

import { styled, useTheme } from '@mui/material/styles'

import img1 from '../../../resources/images/Sponsor.png'
import img2 from '../../../resources/images/Sponsor1.png'
import img3 from '../../../resources/images/Sponsor2.png'
import img4 from '../../../resources/images/Sponsor3.png'
import img5 from '../../../resources/images/Sponsor4.png'
import img6 from '../../../resources/images/Sponsor5.png'
import { Button, useMediaQuery } from '@mui/material'

const imgs = [
  {
    name: 'Shuk Taylor All Star Back Zip',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    url: img1
  },
  {
    name: 'Shuk Taylor All Star Back Zip',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    url: img2
  },
  {
    name: 'Shuk Taylor All Star Back Zip',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    url: img3
  },
  {
    name: 'Shuk Taylor All Star Back Zip',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    url: img4
  },
  {
    name: 'Shuk Taylor All Star Back Zip',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    url: img5
  },
  {
    name: 'Shuk Taylor All Star Back Zip',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    url: img6
  }
]

const Car = styled(Carousel)(({ theme }) => ({}))
const listImages = imgs =>
  imgs.map(img => (
    <img src={img.url} alt={imgs.indexOf(img)} key={imgs.indexOf(img)} />
  ))

const Sponsors = () => {
  const theme = useTheme()
  const changeNumberOfImg = useMediaQuery(theme.breakpoints.up('md'))
  /*const [screemWidth, setScreemWidth] = React.useState(window.innerWidth)
  const [images, setImages] = React.useState(6)
  React.useEffect(() => {
    const handleResizeWindow = () => setScreemWidth(window.innerWidth)
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener('resize', handleResizeWindow)
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener('resize', handleResizeWindow)
    }
  }, [])
  React.useEffect(() => {
    if (screemWidth > 900) {
      setImages(6)
    } else if (screemWidth > 600 && screemWidth < 900) {
      setImages(3)
    } else setImages(1)
  }, [screemWidth])*/
  return (
    <Car
      renderTopCenterControls={({ currentSlide }) => (
        <div>Slide: {currentSlide}</div>
      )}
      renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
        <Button variant='contained' color='secondary'>
          <ArrowBack
            onClick={previousSlide}
            disabled={previousDisabled}
            fontSize='large'
            color='secondary'
          />
        </Button>
      )}
      renderCenterRightControls={({ nextDisabled, nextSlide }) => (
        <button onClick={nextSlide} disabled={nextDisabled}>
          Next
        </button>
      )}
      wrapAround
      slidesToShow={changeNumberOfImg ? 6 : 3}
    >
      {listImages(imgs)}
    </Car>
  )
}

export default Sponsors
