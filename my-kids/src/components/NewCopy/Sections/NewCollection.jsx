import React from 'react'
import { styled } from '@mui/material/styles'
import { CardMedia } from '@mui/material'
import img1 from '../../../resources/images/newcollection1.png'
import img2 from '../../../resources/images/newcollection2.png'

const Div = styled('div')(({ theme }) => ({
  paddingTop: '3em',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '2rem',
  backgroundColor: 'white'
}))

const NewCollection = () => {
  return (
    <Div>
      <CardMedia
        component='img'
        sx={{ maxWidth: '860px' }}
        image={img1}
        alt='green iguana'
      />
      <CardMedia
        component='img'
        sx={{ maxWidth: '860px' }}
        image={img2}
        alt='blue iguana'
      />
    </Div>
  )
}

export default NewCollection
