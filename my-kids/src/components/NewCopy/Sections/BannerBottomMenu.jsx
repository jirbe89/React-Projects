import React from 'react'
import { styled, alpha, ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import BannerBottomMenuChild from './BannerBottomMenuChild'
import { Paper } from '@mui/material'

const Menu = styled(Paper)(({ theme }) => ({
  backgroundColor: 'inherit'
}))

const Ul = styled('ul')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    '& .li': {
      display: 'none'
    }
  },

  display: 'flex',
  listStyle: 'none',
  margin: 0,
  paddingLeft: 0,
  '& li': {
    paddingRight: '1em',
    marginRight: '1em',
    borderRight: '1px solid grey',
    height: '64px',
    paddingTop: '17px'
  }
}))

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto'
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  }
}))

const BannerBottomMenu = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, margin: '0 3.125em' }}>
        <Menu elevation={3}>
          <Toolbar>
            <Typography
              variant='h6'
              noWrap
              component='div'
              sx={{
                flexGrow: 1
              }}
            >
              <nav>
                <Ul>
                  <li>
                    <BannerBottomMenuChild />
                  </li>
                  <li className='li'>About Us</li>
                  <li className='li'>Women</li>
                  <li className='li'>Delivery</li>
                  <li className='li'>Legal Notice</li>
                  <li className='li'>Fashion Supplier</li>
                </Ul>
              </nav>
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Search…'
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Toolbar>
        </Menu>
      </Box>
    </>
  )
}

export default BannerBottomMenu
/*
1-anchor is the anchor position or position where we want to show the menu. This value is set when we click on the button. It opens the menu at the button position.
2-options are menu item values that we need to show. We are using map to show all menu items.
3-selected is the index of the current selected menu item.
4-openMenu and closeMenu methods are called when the menu will open and close. openMenu is called on clicking the button. closeMenu is called if we click on anywhere else on the screen. It will hide the menu.
onMenuItemClick is called on clicking any menu item.
5-We can assign the maximum height and width of a menu. It will create the menu scrollable. For that, we need to give the style in PaperProps props:
<Menu
    open={Boolean(anchor)}
    anchorEl={anchor}
    onClose={closeMenu}
    keepMounted
    PaperProps={{
        style: {
        maxHeight: 40 * 4,
        width: "20ch",
        },
    }}
    >
6-We can change the appear/disappear animations of a menu by providing a props called TransitionComponent. We can use predefined transitions like Grow, Slide, Fade, Zoom as like below
<Menu
    open={Boolean(anchor)}
    anchorEl={anchor}
    onClose={closeMenu}
    keepMounted
    TransitionComponent={Slide}
    ...
*/
