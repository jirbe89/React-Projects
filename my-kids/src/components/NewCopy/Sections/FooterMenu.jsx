import React from 'react'
import { Paper, Typography } from '@mui/material'
import { styled, alpha } from '@mui/material/styles'

const Div1 = styled(Paper)(({ theme }) => ({
  display: 'flex',
  gap: '2em',
  justifyContent: 'space-between',
  padding: '0 1.25em',

  backgroundColor: alpha(theme.palette.common.white, 0.07),
  color: 'rgb(160, 155, 150)',
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}))
const Div = styled(Paper)(({ theme }) => ({
  paddingBottom: '25px',
  backgroundColor: alpha(theme.palette.common.white, 0.07)
}))

const FooterMenu = ({ children }) => {
  return (
    <Div square elevation={0}>
      <Div1 square elevation={0}>
        <div>
          <Typography variant='h5'>Information</Typography>
          <ul className='ulStyleType'>
            <li>Specials</li>
            <li>New products</li>
            <li>Best Sellers</li>
            <li>Our Stores</li>
            <li>Contacts Us</li>
            <li>Terms and conditions of use</li>
            <li>About Us</li>
            <li>SiteMap</li>
            <li>@2014 PrestaShop</li>
          </ul>
        </div>
        <div>
          <Typography variant='h5'>My Account</Typography>
          <ul className='ulStyleType'>
            <li>My orders</li>
            <li>My credit slips</li>
            <li>My addresses</li>
            <li>My personal info</li>
          </ul>
        </div>
        <div>
          <Typography variant='h5'>From Twitter</Typography>
        </div>
        <div>
          <Typography variant='h5'>Payment Option</Typography>
        </div>
        <div>
          <Typography variant='h5'>Our Stores</Typography>
        </div>
      </Div1>
      {children}
    </Div>
  )
}

export default FooterMenu
