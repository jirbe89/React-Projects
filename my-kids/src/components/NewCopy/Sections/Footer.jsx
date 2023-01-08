import React from 'react'
import { styled, alpha } from '@mui/material/styles'
import ContactUs from './ContactUs'
import CopyRight from './CopyRight'
import FooterMenu from './FooterMenu'
import { Paper } from '@mui/material'

const FoooterContainer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column ',
  backgroundColor: alpha(theme.palette.common.black, 0.9)
}))

const Footer = () => {
  return (
    <footer>
      <FoooterContainer square>
        <ContactUs />
        <FooterMenu>
          <CopyRight />
        </FooterMenu>
      </FoooterContainer>
    </footer>
  )
}

export default Footer
