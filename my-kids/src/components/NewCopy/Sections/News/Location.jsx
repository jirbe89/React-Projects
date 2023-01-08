import React from 'react'
import { styled } from '@mui/material/styles'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import img1 from '../../../../resources/images/1.JPG'
import { blue } from '@mui/material/colors'
import { Divider } from '@mui/material'
const Car = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  '& p > span': {
    color: 'blue',
    fontSize: '20px',
    marginLeft: 'auto',
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold'
  }
}))

const Location = () => {
  return (
    <Car>
      <Typography variant='h5' color={blue[700]}>
        Locations
      </Typography>{' '}
      <CardMedia
        component='img'
        height='220'
        image={img1}
        alt='green iguana'
        sx={{ borderTop: '2px solid #1976d2;' }}
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          <span>Lizards</span> <br />
          are a widespread group of squamate reptiles, with over 6,000 species,
          ranging across all continents except Antarctica
        </Typography>
        <br />
        <Divider />
      </CardContent>
      <CardActions>
        <Button size='small'>Share</Button>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Car>
  )
}

export default Location
