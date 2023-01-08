import React, { useRef } from 'react'
import { ListItem, List, MenuItem } from '@mui/material'
import styled from 'styled-components'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import Menu from '@mui/icons-material/Menu'
import { deviceMax } from '../../Styles'
import { NavLink } from 'react-router-dom'

const ListContainer = styled(List)`
  display: flex;
  flex-wrap: wrap;
  padding: 0 !important;
  font-weight: 600;
  @media ${deviceMax.laptop} {
    display: none;
  }
`
const MenuShrink = styled.div`
  display: none;
  @media ${deviceMax.laptop} {
    display: flex;
  }
`
const Li = styled(ListItem)`
  border-right: 1px solid rgb(80, 79, 76) !important;
  width: max-content !important;
  padding: 20px !important;
  font-weight: bold !important;
`
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #2788d5;
  margin: 0 2.5em;
`

const HeaderBottonMenu = () => {
  const ref = useRef(0)
  return (
    <Div className='botonMenu'>
      <div>
        <ListContainer>
          <Li divider={true} button={true}>
            <Typography>
              <NavLink to='/' end>
                Home {console.log(ref.current++)}
              </NavLink>
            </Typography>
          </Li>
          <Li divider={true} button={true}>
            <Typography>
              <NavLink to='form'>About Us</NavLink>
            </Typography>
          </Li>
          <Li divider={true} button={true}>
            <Typography>
              <NavLink to='WomenClothes'>Women</NavLink>
            </Typography>
          </Li>
          <Li divider={true} button={true}>
            <Typography>Delivery</Typography>
          </Li>
          <Li divider={true} button={true}>
            <Typography>Legal Notice</Typography>
          </Li>
          <Li divider={true} button={true}>
            <Typography>Fasion Suplier</Typography>
          </Li>
        </ListContainer>
        <MenuShrink
          size='large'
          edge='start'
          color='inherit'
          aria-label='open drawer'
        >
          <Menu />
        </MenuShrink>
      </div>
      <IconButton
        size='large'
        edge='start'
        color='inherit'
        aria-label='open drawer'
        sx={{ mr: 2 }}
      >
        <SearchIcon />
      </IconButton>
    </Div>
  )
}

export default HeaderBottonMenu
