import React from 'react'
import ArrowDown from '@mui/icons-material/ArrowDropDown'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import { styled } from '@mui/material/styles'

const ToolB = styled(Toolbar)(({ theme }) => ({
  boxShadow: '0 10px 20px -17px rgb(12, 12, 12)'
}))
const Ul = styled(Toolbar)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    listStyle: 'none',
    gap: '2em'
  }
}))

const TopLinks = () => (
  <ToolB>
    <Typography
      variant='caption'
      component='div'
      sx={{ display: { xs: 'block', md: 'none' } }}
    >
      Top Links
    </Typography>
    <IconButton
      size='large'
      edge='start'
      color='inherit'
      aria-label='menu'
      sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
    >
      <ArrowDown />
    </IconButton>
    <Ul>
      <li>
        <Typography variant='joaco'>Wish List</Typography>
      </li>
      <li>
        <Typography variant='joaco'>Sign In</Typography>
      </li>
      <li>
        <Typography variant='joaco'>My Account</Typography>
      </li>
      <li>
        <Typography variant='joaco'>Check Out</Typography>
      </li>
      <li>
        <Typography variant='joaco'>Shopping Cart</Typography>
      </li>
    </Ul>
    <Button color='inherit' sx={{ marginLeft: 'auto' }}>
      Login
    </Button>
  </ToolB>
)

export default TopLinks
