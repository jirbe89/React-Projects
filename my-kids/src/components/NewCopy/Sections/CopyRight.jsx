import React from 'react'
import { styled, alpha } from '@mui/material/styles'
import { InputBase } from '@mui/material'
// #region constants

// #endregion

// #region styled-components
const Div1 = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '2em',
  backgroundColor: alpha(theme.palette.common.black, 0.7),
  padding: '0.5em  1.5em',
  borderRadius: '5px',
  color: 'rgb(160, 155, 150)'
}))
const Div = styled('div')(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.white, 0.07),
  padding: '0 2.5em  ',

  [theme.breakpoints.down('lg')]: {
    padding: '0'
  }
}))
const MailInputBase = styled(InputBase)(({ theme }) => ({
  backgroundColor: 'rgb(160, 155, 150)',
  color: 'white',
  borderRadius: '5px',
  paddingLeft: '0.5em'
}))
// #endregion

// #region functions

// #endregion

// #region component

/**
 *
 */
const CopyRight = () => {
  return (
    <Div>
      <Div1>
        <div style={{ color: 'main.primary' }}>
          CopyRight 2014 Powered by PrestaShop. All Rights Reserved
          <br />
          Developed by Jojo Desing
        </div>
        <div>
          <MailInputBase placeholder='Enter Your E-mail' />
        </div>
      </Div1>
    </Div>
  )
}

export default CopyRight
