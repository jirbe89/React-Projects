import React from 'react'
import AppBar from '@mui/material/AppBar'
import TopLinks from './TopLinks'
import BannerBottomMenu from './BannerBottomMenu'
import { styled } from '@mui/material/styles'
import { Paper, Typography } from '@mui/material'
import { BadgeSharp } from '@mui/icons-material'

const AppB = styled(AppBar)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: '0'
  }
}))
const Div = styled(Paper)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '2em',
  margin: '3em  ',
  backgroundColor: 'inherit',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    margin: '1em 0 '
  }
}))
const CartContiner = styled('div')(({ theme }) => ({
  display: 'flex',
  '& div:nth-child(1)': {
    backgroundColor: '#2196f3',
    padding: '.625em '
  },
  '& div:nth-child(2)': { backgroundColor: 'white', padding: '.5em 2em' }
}))
const Title = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(2.5rem, 5vw, 3rem)'
}))
const Banner = () => (
  <AppB position='static' enableColorOnDark color='primary'>
    <div>
      <TopLinks />
    </div>
    <Div color='primary' elevation={0}>
      <Title variant='h3'>JoJo Converse</Title>
      <CartContiner>
        <div>
          <BadgeSharp sx={{ fontSize: 40 }} />
        </div>
        <div>
          <Typography variant='h6' color='lightblue'>
            SHOPPING CART
          </Typography>
          <Typography variant='subtitle2' color='grey'>
            (empty)
          </Typography>
        </div>
      </CartContiner>
    </Div>
    <div>
      <BannerBottomMenu />
    </div>
  </AppB>
)

export default Banner
