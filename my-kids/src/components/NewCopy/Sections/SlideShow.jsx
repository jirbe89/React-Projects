import React from 'react'
import { Slide } from 'react-slideshow-image'
import { styled } from '@mui/material/styles'
import 'react-slideshow-image/dist/styles.css'
import { Paper, Typography } from '@mui/material'

import img1 from '../../../resources/images/4.png'
import img2 from '../../../resources/images/4.png'
import img3 from '../../../resources/images/4.png'

const slideImages = [
  {
    url: img1,
    caption: 'Slide 1'
  },
  {
    url: img2,
    caption: 'Slide 2'
  },
  {
    url: img3,
    caption: 'Slide 3'
  }
]

// #region constants

// #endregion

// #region styled-components
const Div1 = styled(Paper)(({ theme }) => ({
  '& .react-slideshow-container': {
    boxShadow: '0 10px 20px -17px rgb(12, 12, 12)',
    padding: '4em'
  }
}))
const Div = styled(Paper)(({ theme }) => ({
  display: 'flex'
}))
// #endregion

// #region functions

// #endregion

// #region component

/**
 *
 */
const SlideShow = () => {
  return (
    <Div1 square>
      <Slide>
        {slideImages.map((slideImage, index) => (
          <Div className='each-slide' key={index}>
            <div>
              <Typography variant='h3'>Lorem Ipsum </Typography>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Excepturi repellat doloribus vero dicta deserunt. Sapiente ea
                molestiae, quaerat odio a incidunt quo magni dignissimos
                recusandae officiis impedit id laudantium eum. Magnam sint eum
                quam amet odio natus quidem fuga vel debitis repellendus quia
                aspernatur, earum repudiandae adipisci unde, ratione nostrum,
                molestias quis officiis. Illo asperiores culpa quasi
                necessitatibus est quisquam!
              </p>
            </div>
            <img src={slideImage.url} alt='' />
          </Div>
        ))}
      </Slide>
    </Div1>
  )
}

export default SlideShow
