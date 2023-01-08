import { createTheme } from '@mui/material/styles'
import { purple, green, blue } from '@mui/material/colors'
//import { useTheme } from '@mui/material/styles'; const theme = useTheme();

import { grey } from '@mui/material/colors'

export const darkTheme = createTheme({
  palette: {
    mode: 'dark'
    /*primary: {
      main: 'rgba(0, 0, 0, 0.9)'
    },
    secondary: {
      main: blue[500]
    }*/
  },
  typography: {
    joaco: {
      fontFamily: ['Train One', 'cursive'].join(','),
      color: 'rgb(160, 155, 150)'
    }
  }
  /*,
  typography: {
    h5: {
      backgroundColor: 'black'
    }
  }*/
})
