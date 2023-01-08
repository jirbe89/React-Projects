import React from 'react'
import { styled } from '@mui/material/styles'

import Slides from './Slides'
import Events from './Events'
import Locations from './Location'
import { Paper } from '@mui/material'

const Continer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  gap: '2rem',
  padding: '3em 1.25em',
  backgroundColor: 'white',
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  },
  '& > *': {
    flex: '1'
  }
}))

const News = () => {
  return (
    <Continer square>
      <Slides />
      <Events />
      <Locations />
    </Continer>
  )
}

export default News
