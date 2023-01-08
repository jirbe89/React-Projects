import React from 'react'
import styled from 'styled-components'

import img from '../../resources/images/banner.png'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 3em 2.5em;
  align-items: baseline;
`
const Li = styled(Link)`
  text-decoration: none;
  color: white;
`
const HeaderBanner = () => {
  return (
    <Div>
      <Li to='/'>
        <Typography variant='h2'>JoJoConverse</Typography>
      </Li>

      <img src={img} alt='bannerPicture' />
    </Div>
  )
}

export default HeaderBanner
