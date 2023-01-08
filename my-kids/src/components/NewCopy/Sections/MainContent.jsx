import React from 'react'

import { styled } from '@mui/material/styles'

import SlideShow from './SlideShow'
import Sponsors from './Sponsors'
import News from './News'
import NewCollection from './NewCollection'
import Gallery from './Gallery'
import { Paper } from '@mui/material'

// #region constants

// #endregion

// #region styled-components

const Container = styled(Paper)(({ theme }) => ({
  padding: '0 3.125em',
  backgroundColor: 'lightgray',
  display: 'flex',
  flexDirection: 'column',

  [theme.breakpoints.down('sm')]: {
    padding: '3em 3em 0 3em ',
    backgroundColor: 'white'
  },
  '& .SlideShowSection ': { backgroundColor: 'white' },
  [theme.breakpoints.down('lg')]: {
    '& .SlideShowSection': { display: 'none' }
  }
}))

// #endregion

// #region functions

// #endregion

// #region component

const MainContent = () => {
  return (
    <Container className='main' square>
      <section className='SlideShowSection'>
        <SlideShow />
      </section>
      <section>
        <Gallery />
      </section>
      <section>
        <NewCollection />
      </section>
      <section>
        <News />
      </section>
      <section style={{ padding: '0 3em', backgroundColor: 'white' }}>
        <Sponsors />
      </section>
    </Container>
  )
}
export default MainContent
