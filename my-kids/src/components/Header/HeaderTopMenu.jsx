import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/ArrowDropDown'
//import SearchIcon from '@mui/icons-material/Search'
import { Link /*Router*/ } from 'react-router-dom'

const HeaderTopMenu = () => {
  // const [value, setValue] = React.useState(0)
  return (
    <AppBar position='static'>
      <Link to='/'>Sign In</Link>

      <Link to='/1'>My Account</Link>
      <Link to='/1'>Check Out</Link>
      <Link to='/1'>Shopping Cart</Link>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='open drawer'
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant='h6'
          noWrap
          component='div'
          sx={{ flexGrow: 1, display: { sm: 'block', sx: 'none' } }}
        >
          Top Links
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderTopMenu
