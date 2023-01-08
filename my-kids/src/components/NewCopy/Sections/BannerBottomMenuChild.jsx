import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import { Menu, MenuItem } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'

const M = styled(Menu)(({ theme }) => ({
  '& ul': {
    display: 'flex'
  }
}))
const Li = styled(Link)(({ theme }) => ({
  '& a': { textDecoration: 'none' }
}))
const BannerBottomMenuChild = () => {
  const [anchor, setAnchor] = useState(null)
  const options = ['Insert', 'Second', 'Third', 'Fourth']

  const [selected, setSelected] = useState(-1)

  const openMenu = event => {
    setAnchor(event.currentTarget)
  }

  const closeMenu = () => {
    setAnchor(null)
  }

  const onMenuItemClick = (event, index) => {
    setAnchor(null)
    setSelected(index)
  }
  return (
    <>
      <IconButton
        onClick={openMenu}
        size='large'
        edge='start'
        color='inherit'
        aria-label='open drawer'
        sx={{
          mr: 2,
          display: { sm: 'block', md: 'none' },
          borderRadius: 0,
          height: '40px'
        }}
      >
        <MenuIcon />
      </IconButton>
      <Link className='li' to='/' onClick={openMenu}>
        Home
      </Link>
      <M
        open={Boolean(anchor)}
        anchorEl={anchor}
        onClose={closeMenu}
        keepMounted
      >
        {options.map((option, index) => (
          <MenuItem
            key={index}
            onClick={event => onMenuItemClick(event, index)}
            selected={index === selected}
            component={Link}
            to='/form'
          >
            {option}
          </MenuItem>
        ))}
      </M>
    </>
  )
}

export default BannerBottomMenuChild
