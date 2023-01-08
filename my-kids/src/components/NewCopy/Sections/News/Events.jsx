import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import img1 from '../../../../resources/images/1.JPG'

import { blue } from '@mui/material/colors'

const Events = () => {
  return (
    <Card>
      <Typography variant='h5' color={blue[700]} noWrap>
        News & Events
      </Typography>{' '}
      <CardMedia
        component='img'
        height='220'
        image={img1}
        alt='green iguana'
        sx={{ borderTop: '2px solid #1976d2;' }}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          Lizard
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae quo
          doloribus labore voluptas nemo? Vitae aperiam tempora velit impedit
          officiis deleniti culpa obcaecati voluptates quasi. Dicta enim sit
          distinctio blanditiis! Porro nam totam distinctio repudiandae
          asperiores error iusto harum, nobis quae delectus aliquam dignissimos?
          Magnam ratione quasi atque impedit nam sequi minima, itaque velit nemo
          illum incidunt, minus nulla cum?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Share</Button>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default Events
