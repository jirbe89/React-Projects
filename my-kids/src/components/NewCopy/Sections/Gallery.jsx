import React from 'react'
import { styled } from '@mui/material/styles'
import { Typography, Button, CardMedia, Paper, Divider } from '@mui/material'

import img1 from '../../../resources/images/tenis.png'
import img2 from '../../../resources/images/tenis2.png'
import img3 from '../../../resources/images/tenis8.png'
import img4 from '../../../resources/images/tenis3.png'
import img5 from '../../../resources/images/tenis4.png'
import img6 from '../../../resources/images/tenis5.png'
import img7 from '../../../resources/images/tenis6.png'
import img8 from '../../../resources/images/tenis7.png'

// #region constants
const imgs = [
  {
    name: 'Shuk Taylor All Star Back Zip',
    description: 'Lorem ipsum dolor sit amet  elit...',
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
  },
  {
    name: 'Shuk Taylor All Star Back Zip',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    url: img7
  },
  {
    name: 'Shuk Taylor All Star Back Zip',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    url: img8
  }
]
// #endregion

// #region styled-components
const Div = styled(Paper)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'baseline',
  flexWrap: 'wrap',
  backgroundColor: 'white',

  [theme.breakpoints.up('sm')]: {
    justifyContent: 'space-evenly',
    padding: '3em 0 0'
  },
  [theme.breakpoints.down('lg')]: {
    '& hr': { display: 'none' }
  }
}))

const InsideDiv = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  maxWidth: '365px'
}))

// #endregion

// #region functions

// #endregion

// #region component

/**
 *
 */
const Gallery = () => {
  return (
    <Div square elevation={0}>
      {imgs.map(slideImage => (
        <>
          <InsideDiv key={slideImage.url} elevation={0}>
            <CardMedia
              component='img'
              image={slideImage.url}
              alt='green iguana'
              sx={{ maxWidth: '330px' }}
            />
            <Typography variant='h6'>{slideImage.name}</Typography>
            <Typography variant='body1'>{slideImage.description}</Typography>
            <Button type='button' variant='contained' color='primary'>
              $28.98
            </Button>
          </InsideDiv>
          <Divider orientation='vertical' flexItem />
        </>
      ))}
    </Div>
  )
}

// #endregion

export default Gallery
