import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ArrowDown from '@mui/icons-material/ArrowDropDown'
import { Breadcrumbs } from '@mui/material'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import HeaderBanner from './HeaderBanner'
import BottonMenu from './HeaderBottonMenu'
import { deviceMin, deviceMax } from '../../Styles'

const BreadC = styled(Breadcrumbs)`
  @media ${deviceMax.laptop} {
    display: none;
  }
`
const SmallMenu = styled(Typography)`
  color: rgb(160, 155, 150);
  @media ${deviceMin.laptop} {
    display: none;
  }
`
const Div = styled.div`
  padign: 0 3.5em;

  @media (max-width: 330px) {
    flex-wrap: wrap;
  }
`
const ToolB = styled(Toolbar)`
  align-items: center !important;
  padding-left: 2.5em !important;
  max-height: 38px !important;
  min-height: 38px !important;
`
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position='static' color='secondary'>
      <Div className='topMenuContainer'>
        <ToolB>
          <BreadC separator='' className='topMenu'>
            <Link to='/form'>Wish List</Link>
            <Link to='/form'>Sign In</Link>
            <Link to='/slideshow'>My Account</Link>
            <Link to='/1'>Check Out</Link>
            <Link to='/1'>Shopping Cart</Link>
          </BreadC>
          <div>
            <SmallMenu component='div'>
              Top Links
              <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='open drawer'
                sx={{ mr: 2 }}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <ArrowDown />
              </IconButton>
            </SmallMenu>
            <Menu
              id='basic-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button'
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </ToolB>
        <ToolB className='rightTopMenu'>
          <Typography component='div'>Languages</Typography>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
          >
            <ArrowDown />
          </IconButton>
          <Typography component='div'>Currency</Typography>
          <IconButton
            className='secondArrow'
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
          >
            <ArrowDown />
          </IconButton>
        </ToolB>
      </Div>
      <HeaderBanner />
      <BottonMenu />
    </AppBar>
  )
}

export default Header
