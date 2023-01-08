import React from 'react'
import { Typography } from '@mui/material'
import {
  Facebook,
  Instagram,
  Twitter,
  RssFeed,
  FireTruck,
  Phone
} from '@mui/icons-material/'
import { styled, alpha } from '@mui/material/styles'

const Div = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 1.25em',
  backgroundColor: 'black',
  color: 'rgb(160, 155, 150)',
  borderBottom: 'solid 2px rgb(70 68 66)',
  alingnItems: 'center',
  padding: '2.5em',
  backgroundColor: alpha(theme.palette.common.white, 0.04),
  gap: '2em'
}))
const SocialDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  gap: '2em',
  '& .icon ': {
    backgroundColor: 'black',
    borderRadius: '20px',
    width: '30px',
    higth: '30px'
  },
  '& > div ': {
    padding: '10px',
    backgroundColor: 'black',
    borderRadius: '25px',
    maxHeight: '48px'
  },
  [theme.breakpoints.down('sm')]: {
    flexGrow: 1
  }
}))
const Span = styled('span')(({ theme }) => ({
  color: 'aqua'
}))
const sx = { display: { xs: 'none', sm: 'block' } }

const ContactUs = () => {
  return (
    <Div>
      <Typography variant='h5' sx={sx}>
        <Span>[</Span>
        <FireTruck />
        <Span>]</Span>Free Shipping on orders over $100
      </Typography>
      <Typography variant='h5' color='aqua' sx={sx}>
        [<Phone />
        ]Call Us! Toll Free <span>123-456-789</span>
      </Typography>
      <SocialDiv>
        <div>
          <Facebook color='secondary' className='icon' />
        </div>
        <div>
          <Instagram color='error' className='icon' />
        </div>
        <div>
          <Twitter color='success' className='icon' />
        </div>
        <div>
          <RssFeed color='warning' className='icon' />
        </div>
      </SocialDiv>
    </Div>
  )
}

export default ContactUs
