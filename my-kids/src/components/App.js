//import { useDispatch, useSelector } from 'react-redux'
//import PostNews from './postNews'
import { ThemeProvider } from '@mui/material'
import { Theme } from '../Theme'

import './App.css'

import Header from './Header/Header'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'

const App = () => {
  //const execute = useDispatch()
  //const postState = useSelector(state => state.post)
  //console.log(postState)

  return (
    <ThemeProvider theme={Theme}>
      <div className='App-flex'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' exact element={<div>Route</div>} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}

export default App
